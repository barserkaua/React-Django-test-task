FROM python:4.0-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .