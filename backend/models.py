from enum import unique
from tortoise.models import Model
from tortoise import fields
from datetime import datetime
from tortoise.contrib.pydantic import pydantic_model_creator


class Client(Model):
    id = fields.IntField(pk=True,index = True)
    username = fields.CharField(max_length=20,unique=True,index = True,null = False)
    email = fields.CharField(max_length=200,unique = True,null = False)
    password = fields.CharField(max_length=100,null = False)
    is_verified = fields.BooleanField(default = False)
    join_date = fields.DatetimeField(default = datetime.utcnow)
    company = fields.CharField(max_length=50,null = True)


class Project(Model):
    id = fields.IntField(pk=True,index = True)
    name = fields.CharField(max_length=50,null = False)
    description = fields.TextField(null = True)
    client_id = fields.IntField(null = True)
    status = fields.CharField(max_length=200,null = True)
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)
    estimated_deadline = fields.DateField(null = True)


class Developer(Model):
    id = fields.IntField(pk=True,index = True)
    name = fields.CharField(max_length=50,null = False)
    email = fields.CharField(max_length=50,unique = True,null = False)
    password = fields.CharField(max_length=100,null = False)
    is_verified = fields.BooleanField(default = True)
    join_date = fields.DatetimeField(default = datetime.utcnow)
    current_assigned_project_id = fields.IntField(null = True)
    is_assigned = fields.CharField(max_length=50,default = "No")
    company = fields.CharField(max_length=50,null = True)
    specialization = fields.CharField(max_length=100,null = True)
    


class ProjectManager(Model):
    id = fields.IntField(pk=True,index = True)
    name = fields.CharField(max_length=50,null = False)
    email = fields.CharField(max_length=50,unique = True,null = False)
    password = fields.CharField(max_length=100,null = False)
    is_verified = fields.BooleanField(default = True)
    join_date = fields.DatetimeField(default = datetime.utcnow)



client_pydantic = pydantic_model_creator(Client,name = 'ClientPydantic',exclude = ('is_verified'))
client_pydanticInput = pydantic_model_creator(Client,name = 'ClientInput',exclude_readonly=True,exclude = ('is_verified','join_date'))
client_pydanticOutput = pydantic_model_creator(Client,name = 'ClientOutput',exclude = ('password','join_date'))
client_login_pydantic = pydantic_model_creator(Client,name = 'ClientLoginPydantic',exclude = ('is_verified','join_date','company','username','id'))


project_pydantic = pydantic_model_creator(Project,name = 'ProjectPydantic',exclude=('created_at','updated_at'))
project_pydanticInput = pydantic_model_creator(Project,name = 'ProjectInput',exclude_readonly=True,exclude=('created_at','updated_at','estimated_deadline','status'))
project_pydanticOutput = pydantic_model_creator(Project,name = 'ProjectOutput',exclude = ('id'))
project_pydanticUpdateInput = pydantic_model_creator(Project,name = 'ProjectUpdateInput',exclude_readonly=True,exclude=('id','created_at','updated_at','client_id'))
project_pydanticUpdateDev = pydantic_model_creator(Project,name = 'ProjectUpdateDev',exclude_readonly=True,exclude=('id','created_at','updated_at','client_id','name','description'))
project_pydanticUpdateClient = pydantic_model_creator(Project,name = 'ProjectUpdateClient',exclude_readonly=True,exclude=('id','created_at','updated_at','estimated_deadline','client_id','status'))

developer_pydantic = pydantic_model_creator(Developer,name = 'DeveloperPydantic',exclude=('is_verified','current_assigned_project_id','is_assigned'))
developer_pydanticInput = pydantic_model_creator(Developer,name = 'DeveloperInput',exclude_readonly=True,exclude=('is_verified','current_assigned_project_id','join_date'))
developer_login = pydantic_model_creator(Developer,name = 'DeveloperLogin',exclude = ('id','is_verified','current_assigned_project_id','join_date','company','specialization','name','is_assigned'))
developer_pydanticOutput = pydantic_model_creator(Developer,name = 'DeveloperOutput',exclude = ('password','join_date'))
dev_project_assign = pydantic_model_creator(Developer,name = 'DevProjectAssign',exclude = ('id','is_verified','name','email','password','join_date','company','specialization'))

projectmanager_pydantic = pydantic_model_creator(ProjectManager,name = 'ProjectManagerPydantic',exclude=('is_verified'))
projectmanager_login = pydantic_model_creator(ProjectManager,name = 'ProjectManagerLogin',exclude = ('id','is_verified','join_date','name'))
projectmanager_pydanticInput = pydantic_model_creator(ProjectManager,name = 'ProjectManagerInput',exclude_readonly=True,exclude=('is_verified','join_date'))
projectmanager_pydanticOutput = pydantic_model_creator(ProjectManager,name = 'ProjectManagerOutput',exclude = ('password','join_date'))

