export const URL_HOST =
    process.env.NODE_ENV === "production"
        ? "https://cors-anywhere.herokuapp.com/musiclibrarybackend-env.eba-atv3bdfb.us-east-2.elasticbeanstalk.com"
        : "http://127.0.0.1:8000";