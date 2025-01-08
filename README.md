# Node Timezones

A simple web app to test setting the timezone of the server.

## Setting the Timezone

The server timezone is controlled by the `TZ` environment variable. The application reads this value using `process.env.TZ` and defaults to 'UTC' if not set:

```javascript
const timeZone = process.env.TZ || 'UTC';
```

For local dev, set the timezone before starting the server:

```bash
export TZ=America/New_York npm start
```

To set the timezone on Heroku, use the following command:

```bash
heroku config:set TZ=America/New_York
```
