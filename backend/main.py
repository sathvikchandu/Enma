from urllib import response
from fastapi import Body, FastAPI
from tortoise.contrib.fastapi import register_tortoise
from models import *
from authentication import get_password_hash
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi import (FastAPI, BackgroundTasks, UploadFile,
                     File, Form, Depends, HTTPException, status, Request)
from authentication import *
from fastapi.security import (
    OAuth2PasswordBearer,
    OAuth2PasswordRequestForm
)
from fastapi.middleware.cors import CORSMiddleware
# signals
from tortoise.signals import post_save
from tortoise.signals import pre_save
from typing import List, Optional, Type
from tortoise import BaseDBAsyncClient
from emails import *
from authentication import *
from dotenv import dotenv_values
import math
import hashlib
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost:8080",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def hash_passowrd(password):
    return hashlib.sha256(password.encode()).hexdigest()


@app.post('/client/create')
async def create_client(client: client_pydanticInput):
    client_info = client.dict(exclude_unset=True)
    client_info["password"] = hash_passowrd(client_info["password"])
    client_obj = await Client.create(**client_info)
    new_client = await client_pydantic.from_tortoise_orm(client_obj)
    await send_email([new_client.email], new_client)
    return{
        "status": "ok",
        "data": f"Hellooo, {new_client.username} has been created,thanks for choosing our services.Check your email."
    }


@app.post('/dev/create')
async def create_dev(dev: developer_pydanticInput):
    dev_info = dev.dict(exclude_unset=True)
    dev_info["password"] = hash_passowrd(dev_info["password"])
    dev_obj = await Developer.create(**dev_info)
    if dev_obj:
        new_dev = await developer_pydantic.from_tortoise_orm(dev_obj)
        return{
            "status": "ok",
            "data": f"Hellooo, {new_dev.name} has been created."
        }
    else:
        return{
            "status": "error",
            "data": f"Sorry, {dev.name} has not been created.",
            "error": "developer already exists"
        }


@app.post('/pm/create')
async def create_pm(pm: projectmanager_pydanticInput):
    pm_info = pm.dict(exclude_unset=True)
    pm_info["password"] = hash_passowrd(pm_info["password"])
    pm_obj = await ProjectManager.create(**pm_info)
    new_pm = await projectmanager_pydanticInput.from_tortoise_orm(pm_obj)
    return{
        "status": "ok",
        "data": f"Hellooo, {new_pm.name} has been created."
    }


templates = Jinja2Templates(directory="templates")


@app.get('/verification',  response_class=HTMLResponse)
# make sure to import request from fastapi and HTMLResponse
async def email_verification(request: Request, token: str):
    client = await verify_token(token)
    if client and not client.is_verified:
        client.is_verified = True
        await client.save()
        return templates.TemplateResponse("verification.html",
                                          {"request": request,
                                              "username": client.username}
                                          )
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid or expired token",
        headers={"WWW-Authenticate": "Bearer"},
    )


@app.post('/user/developer')
async def developer_login(developer: developer_login):
    dev_info = developer.dict(exclude_unset=True)
    dev_obj = await Developer.get(email=dev_info["email"])
    if dev_obj:
        print(dev_obj.password)
        print(dev_info["password"])
        print(hash_passowrd(dev_info["password"]))
        if dev_obj.password == hash_passowrd(dev_info["password"]):
            dev_obj.is_logged_in = True
            await dev_obj.save()
            return{
                "status": "ok",
                "message": f"Hello {dev_obj.name}, you are logged in.",
                "data": dev_obj

            }
        else:
            return{
                "status": "error",
                "data": f"Invalid email or password."
            }


@app.post('/user/pm')
async def pm_login(pm: projectmanager_login):
    pm_info = pm.dict(exclude_unset=True)
    pm_obj = await ProjectManager.get(email=pm_info["email"])
    if pm_obj:
        if pm_obj.password == hash_passowrd(pm_info["password"]):
            pm_obj.is_logged_in = True
            await pm_obj.save()
            return{
                "status": "ok",
                "message": f"Hello {pm_obj.name}, you are logged in.",
                "data": pm_obj
            }
        else:
            return{
                "status": "error",
                "data": f"Invalid email or password."
            }


@app.post('/user/client')
async def client_login(client: client_login_pydantic):
    client_info = client.dict(exclude_unset=True)
    client_obj = await Client.get(email=client_info["email"])
    if client_obj:
        if client_obj.password == hash_passowrd(client_info["password"]):
            client_obj.is_logged_in = True
            await client_obj.save()
            return{
                "status": "ok",
                "message": f"Hello {client_obj.username}, you are logged in.",
                "data": client_obj

            }
        else:
            return{
                "status": "error",
                "data": f"Invalid email or password."
            }


@app.post("/project_create")
async def create_project(project: project_pydanticInput):
    project_info = project.dict(exclude_unset=True)
    if len(project_info["description"]) <= 0:
        project_info["description"] = "No description"
    project_obj = await Project.create(**project_info)
    if project_obj:
        project_obj = await project_pydantic.from_tortoise_orm(project_obj)
        return {
            "status": "ok",
            "data": project_obj
        }
    else:
        return{
            "status": "error",
            "data": f"Project {project_obj.name} has not been created."
        }


@app.get("/project/{id}")
async def get_project(id: int):
    project_obj = await Project.get(id=id)
    if project_obj:
        project_obj = await project_pydantic.from_tortoise_orm(project_obj)
        return {
            "status": "ok",
            "data": project_obj
        }


@app.get("/projects")
async def get_projects():
    response = await project_pydantic.from_queryset(Project.all())
    return {
        "status": "ok",
        "data": response
    }


@app.get("/developers/not-assinged")
async def get_developers():
    response = await developer_pydantic.from_queryset(Developer.filter(is_assigned = "No"))
    return {
        "status": "ok",
        "data": response
    }

@app.get("/projects-client/{id}")
async def get_projects_client(id: int):
    response = await project_pydantic.from_queryset(Project.filter(client_id=id))
    return {
        "status": "ok",
        "data": response

    }


@app.put("/project-dev/{id}")
async def update_project(id: int, project: project_pydanticUpdateDev):
    project_info = await Project.get(id=id)
    project = project.dict(exclude_unset=True)
    await project_info.update_from_dict(project)
    await project_info.save()
    response = await project_pydantic.from_tortoise_orm(project_info)
    return {
        "status": "ok",
        "data": response
    }


@app.put("/project-client/{id}")
async def update_project_dev(id: int, project: project_pydanticUpdateClient):
    project_info = await Project.get(id=id)
    project = project.dict(exclude_unset=True)
    await project_info.update_from_dict(project)
    await project_info.save()
    response = await project_pydantic.from_tortoise_orm(project_info)
    return {
        "status": "ok",
        "data": response
    }


@app.get("")
@app.put("/assign-project/{id}")
async def assign_project(id: int, developer: dev_project_assign):
    dev_obj = await Developer.get(id=id)
    developer = developer.dict(exclude_unset=True)
    print(developer)
    await dev_obj.update_from_dict(developer)
    await dev_obj.save()
    response = await developer_pydantic.from_tortoise_orm(dev_obj)
    print(response)
    return {
        "status": "ok",
        "data": response
    }


@app.get("/developers")
async def get_developers():
    response = await developer_pydantic.from_queryset(Developer.all())
    return {
        "status": "ok",
        "data": response
    }


@app.get("/")
def index():
    return {"message": "Hello World"}


register_tortoise(
    app,
    db_url='sqlite://db.sqlite3',
    modules={'models': ['models']},
    generate_schemas=True,
    add_exception_handlers=True,
)
