FROM cypress/included:3.2.0

RUN mkdir -p /e2e
WORKDIR /e2e

COPY . .

RUN yarn

VOLUME ["./assets"]

# Cypress looks for the "cypress" folder by default
COPY ./e2e ./
