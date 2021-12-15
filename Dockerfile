FROM python:3.10.0-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .