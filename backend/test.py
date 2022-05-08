import requests

url = 'http://127.0.0.1:8000/asssign-project/{9}'
payload ={
  "is_assigned": "True",
  "current_assigned_project": 3
}
resp = requests.post(url=url, json=payload)
print(resp.json())