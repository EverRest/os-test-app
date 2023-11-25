FROM ubuntu:latest
LABEL authors="pavlo.medynskyi"

ENTRYPOINT ["top", "-b"]