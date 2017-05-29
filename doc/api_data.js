define({ "api": [
  {
    "type": "GET",
    "url": "/account/login",
    "title": "Signin with an existing user.",
    "group": "AccountGroup",
    "version": "0.0.0",
    "filename": "./node_modules/apidoc/EXAMPLES.md",
    "groupTitle": "Account endpoints",
    "groupDescription": "<p>Here is the description for the &quot;AccountGroup&quot;. It can contain <strong>markdown</strong> syntax.</p>",
    "name": "GetAccountLogin"
  },
  {
    "type": "delete",
    "url": "/alertbutton/:id",
    "title": "",
    "name": "destroy",
    "group": "AlertButton",
    "description": "<p>Delete the given AlertButton</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>: Id of the alert button you want to delete</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AlertButtonController.js",
    "groupTitle": "AlertButton",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/alertbutton",
    "title": "",
    "name": "find",
    "group": "AlertButton",
    "description": "<p>Get the list of all alert buttons according to permissions.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "An",
            "description": "<p>array of alert buttons</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AlertButtonController.js",
    "groupTitle": "AlertButton",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/alertbutton/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "AlertButton",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/AlertButtonController.js",
    "groupTitle": "AlertButton"
  },
  {
    "type": "post",
    "url": "/alertbutton/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "AlertButton",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/AlertButtonController.js",
    "groupTitle": "AlertButton"
  },
  {
    "type": "put",
    "url": "/alertbutton/:id",
    "title": "",
    "name": "update",
    "group": "AlertButton",
    "description": "<p>Update the given alert button</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver",
            "description": "<p>: The id of the team concerned about this alert (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>: The button title (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>: The button category (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "message:",
            "description": "<p>Is a message required when creating an alert via this Button ? (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messagePlaceholder:",
            "description": "<p>Placeholder for the message to send when creating a alert (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "AlertButton",
            "optional": false,
            "field": "The",
            "description": "<p>alert button that you've just updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AlertButtonController.js",
    "groupTitle": "AlertButton",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/alertbutton",
    "title": "",
    "name": "create",
    "group": "Alert_Button",
    "description": "<p>Create a new Alert Button</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver",
            "description": "<p>: The id of the team concerned about this alert (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>: The button title (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>: The button category (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "message:",
            "description": "<p>Is a message required when creating an alert via this Button ? (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messagePlaceholder:",
            "description": "<p>Placeholder for the message to send when creating a alert (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "AlertButton",
            "optional": false,
            "field": "The",
            "description": "<p>alert button that you've just created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AlertButtonController.js",
    "groupTitle": "Alert_Button",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/alert",
    "title": "",
    "name": "find",
    "group": "Alert",
    "description": "<p>Get the alerts where the receiver is the the team of the requester.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "An",
            "description": "<p>array of alerts</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AlertController.js",
    "groupTitle": "Alert",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/alert/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "Alert",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/AlertController.js",
    "groupTitle": "Alert"
  },
  {
    "type": "post",
    "url": "/alert/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "Alert",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/AlertController.js",
    "groupTitle": "Alert"
  },
  {
    "type": "put",
    "url": "/alert/:id",
    "title": "",
    "name": "update",
    "group": "Alert",
    "description": "<p>Update the given alert. Only the severity and the message can be updated (depending of the requester's role).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>: The id of the alert to update(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "severity",
            "description": "<p>: The alert severity (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Alert",
            "optional": false,
            "field": "The",
            "description": "<p>alert that you've just updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AlertController.js",
    "groupTitle": "Alert",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/auth/roles",
    "title": "Get roles config",
    "name": "getRoles",
    "group": "Authentication",
    "description": "<p>Will give the roles list associated with permissions</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>The roles object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n      bar: [\n          'message/oneChannel',\n      ],\n      log: [\n          'message/public',\n          'message/group',\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/ip",
    "title": "Authenticate user by IP",
    "name": "ipLogin",
    "group": "Authentication",
    "description": "<p>Will try to authenticate with the IP used by the client that send the request.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceId",
            "description": "<p>If smartphone app, deviceId is required</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firebaseToken",
            "description": "<p>If smartphone app, firebaseToken is required</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IPNotFound",
            "description": "<p>There is no User associated with this IP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "IPNotFound",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"_error\": {\n        code: 401,\n        status: 'IPNotFound',\n        message: 'There is no User associated with this IP'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>JWT (JSON Web Token) that you have to use to authenticate against other API endpoints. Here is how to use it:</p> <ul> <li>For HTTP requests, you have to set an header <code>Authorization: Bearer [Your JWT token]</code></li> <li>For Web socket requests, you are already authenticated after this method, because you JWT has been associated with your socket. But if you need to open a new socket with this JWT, you can authenticate with the <code>/auth/jwt</code> endpoint</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"jwt\": \"QnJhdm8sIHR1IGFzIGTDqWNvZMOpIGNlIGNv.ZGUgZW4gQmFzZTY0LCBqJ8Opc3DDqHJlIHF1ZSB0dSBlcyBmaWVyIGRlIHRvaSwgw6dhIG.4nYXJyaXZlIHBhcyB0b3VzIGxlcyBqb3VycyB0dSBzY\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/jwt",
    "title": "Authenticate user by JWT",
    "name": "jwtLogin",
    "group": "Authentication",
    "description": "<p>This endpoint can be used to renew a yet-not-expired JWT. In socket communication, this endpoint can also be used once to authenticate the whole socket connection.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>A still valid JWT that you've taken from other auth method</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceId",
            "description": "<p>If smartphone app, deviceId is required</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firebaseToken",
            "description": "<p>If smartphone app, firebaseToken is required</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidJwt",
            "description": "<p>The given JWT is not valid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidJwt",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"_error\": {\n        code: 401,\n        status: 'InvalidJwt',\n        message: 'The given JWT is not valid'\n    }\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>JWT (JSON Web Token) that you have to use to authenticate against other API endpoints. Here is how to use it:</p> <ul> <li>For HTTP requests, you have to set an header <code>Authorization: Bearer [Your JWT token]</code></li> <li>For Web socket requests, you are already authenticated after this method, because you JWT has been associated with your socket. But if you need to open a new socket with this JWT, you can authenticate with the <code>/auth/jwt</code> endpoint</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"jwt\": \"QnJhdm8sIHR1IGFzIGTDqWNvZMOpIGNlIGNv.ZGUgZW4gQmFzZTY0LCBqJ8Opc3DDqHJlIHF1ZSB0dSBlcyBmaWVyIGRlIHRvaSwgw6dhIG.4nYXJyaXZlIHBhcyB0b3VzIGxlcyBqb3VycyB0dSBzY\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/as/:id",
    "title": "Auth as another user",
    "name": "loginAs",
    "group": "Authentication",
    "description": "<p>Will generate and authenticate with JWT token as another user for debugging and testing purposes. Warning: the current user for connection will be replaced.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user you want to authenticate</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdNotFound",
            "description": "<p>There is no User associated with this id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "IdNotFound",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"_error\": {\n        code: 401,\n        status: 'IdNotFound',\n        message: 'There is no User associated with this id'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>JWT (JSON Web Token) that you have to use to authenticate against other API endpoints. Here is how to use it:</p> <ul> <li>For HTTP requests, you have to set an header <code>Authorization: Bearer [Your JWT token]</code></li> <li>For Web socket requests, you are already authenticated after this method, because you JWT has been associated with your socket. But if you need to open a new socket with this JWT, you can authenticate with the <code>/auth/jwt</code> endpoint</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"jwt\": \"QnJhdm8sIHR1IGFzIGTDqWNvZMOpIGNlIGNv.ZGUgZW4gQmFzZTY0LCBqJ8Opc3DDqHJlIHF1ZSB0dSBlcyBmaWVyIGRlIHRvaSwgw6dhIG.4nYXJyaXZlIHBhcyB0b3VzIGxlcyBqb3VycyB0dSBzY\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "Inform that a user is disconnected",
    "name": "logout",
    "group": "Authentication",
    "description": "<p>Will give the disconnected user</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/auth/oauth",
    "title": "Initiate OAuth log in",
    "name": "oauthLogin",
    "group": "Authentication",
    "description": "<p>Initiate the OAuth 2.0 authentication with EtuUTT. This method will generate an URI where the user should be redirected.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "redirectUri",
            "description": "<p>The URI where the user should be redirected.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"redirectUri\": \"https://etu.utt.fr/api/oauth/authorize?client_id=0&scopes=public&response_type=code\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EtuUTTNotConfigured",
            "description": "<p>The server is not configured for the API of EtuUTT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "EtuUTTNotConfigured",
          "content": "HTTP/1.1 501 Not Implemented\n{\n    \"_error\": {\n        code: 501,\n        status: 'EtuUTTNotConfigured',\n        message: 'The server is not configured for the API of EtuUTT'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/oauth/submit",
    "title": "Submit OAuth log in",
    "name": "oauthLoginSubmit",
    "group": "Authentication",
    "description": "<p>Submit the authorization_code of OAuth 2.0 for authentication with EtuUTT. This method will check if the user is known and associated with a team. If it is, a JWT will be returned.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authorizationCode",
            "description": "<p>Authorization_code that you get after user redirection.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EtuUTTNotConfigured",
            "description": "<p>The server is not configured for the API of EtuUTT</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EtuUTTError",
            "description": "<p>An error occurs during communications with the api of EtuUTT</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginNotFound",
            "description": "<p>There is no User associated with this login</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "EtuUTTNotConfigured",
          "content": "HTTP/1.1 501 Not Implemented\n{\n    \"_error\": {\n        code: 501,\n        status: 'EtuUTTNotConfigured',\n        message: 'The server is not configured for the API of EtuUTT'\n    }\n}",
          "type": "json"
        },
        {
          "title": "EtuUTTError",
          "content": "HTTP/1.1 503 Service Unavailable\n{\n    \"_error\": {\n        code: 503,\n        status: 'EtuUTTError',\n        message: 'An error occurs during communications with the api of EtuUTT'\n    }\n}",
          "type": "json"
        },
        {
          "title": "LoginNotFound",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"_error\": {\n        code: 401,\n        status: 'LoginNotFound',\n        message: 'There is no User associated with this login'\n    }\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>JWT (JSON Web Token) that you have to use to authenticate against other API endpoints. Here is how to use it:</p> <ul> <li>For HTTP requests, you have to set an header <code>Authorization: Bearer [Your JWT token]</code></li> <li>For Web socket requests, you are already authenticated after this method, because you JWT has been associated with your socket. But if you need to open a new socket with this JWT, you can authenticate with the <code>/auth/jwt</code> endpoint</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"jwt\": \"QnJhdm8sIHR1IGFzIGTDqWNvZMOpIGNlIGNv.ZGUgZW4gQmFzZTY0LCBqJ8Opc3DDqHJlIHF1ZSB0dSBlcyBmaWVyIGRlIHRvaSwgw6dhIG.4nYXJyaXZlIHBhcyB0b3VzIGxlcyBqb3VycyB0dSBzY\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/barreltype/barrel",
    "title": "",
    "name": "Set_barrel_count",
    "group": "BarrelType",
    "description": "<p>Set the number of barrels from a barrel type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>: The id of the barrel type (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "count",
            "description": "<p>: the number of barrels to set for this Type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "This",
            "description": "<p>endpoint return nothing, if you want to whole new list of barrel ask <code>find</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelTypeController.js",
    "groupTitle": "BarrelType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/barreltype/:id",
    "title": "",
    "name": "destroy",
    "group": "BarrelType",
    "description": "<p>Delete the given BarrelType</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>: Id of the barrel type to delete</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelTypeController.js",
    "groupTitle": "BarrelType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/barreltype",
    "title": "",
    "name": "find",
    "group": "BarrelType",
    "description": "<p>Get the list of all barrel types according to permissions.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "An",
            "description": "<p>array of barrel type</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelTypeController.js",
    "groupTitle": "BarrelType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/barreltype/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "BarrelType",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelTypeController.js",
    "groupTitle": "BarrelType"
  },
  {
    "type": "post",
    "url": "/barreltype/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "BarrelType",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelTypeController.js",
    "groupTitle": "BarrelType"
  },
  {
    "type": "put",
    "url": "/barreltype/:id",
    "title": "",
    "name": "update",
    "group": "BarrelType",
    "description": "<p>Update the given barrel type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>: Id of the barrel type to edit (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>: The name of the contents of the barrel (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shortName",
            "description": "<p>: A short unique code from the name of the contents (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "liters",
            "description": "<p>: The amount of drink in the barrel (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "supplierPrice",
            "description": "<p>: purchasing price (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "sellPrice",
            "description": "<p>: sell price(optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "BarrelType",
            "optional": false,
            "field": "The",
            "description": "<p>barrel type that you've just updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelTypeController.js",
    "groupTitle": "BarrelType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/barreltype",
    "title": "",
    "name": "create",
    "group": "Barrel_Type",
    "description": "<p>Create a new barrel type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>: The name of the contents of the barrel (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shortName",
            "description": "<p>: A short unique code from the name of the contents (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "liters",
            "description": "<p>: The amount of drink in the barrel (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "supplierPrice",
            "description": "<p>: purchasing price (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "sellPrice",
            "description": "<p>: sell price(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "BarrelType",
            "optional": false,
            "field": "The",
            "description": "<p>alert button that you've just created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelTypeController.js",
    "groupTitle": "Barrel_Type",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/barrel",
    "title": "",
    "name": "find",
    "group": "Barrel",
    "description": "<p>Get the list of all barrel according to permissions.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "An",
            "description": "<p>array of barrel</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelController.js",
    "groupTitle": "Barrel",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/barrel/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "Barrel",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelController.js",
    "groupTitle": "Barrel"
  },
  {
    "type": "post",
    "url": "/barrel/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "Barrel",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelController.js",
    "groupTitle": "Barrel"
  },
  {
    "type": "put",
    "url": "/barrel/:id",
    "title": "",
    "name": "update",
    "group": "Barrel",
    "description": "<p>Update the given barrel</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>: Id of the barrel to edit (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>: The new barrel state (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Barrel",
            "optional": false,
            "field": "The",
            "description": "<p>barrel that you've just updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelController.js",
    "groupTitle": "Barrel",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/barrel/location",
    "title": "",
    "name": "updateLocation",
    "group": "Barrel",
    "description": "<p>update the location of a list of barrels</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "barrels:",
            "description": "<p>Array of barrels id to move</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BarrelController.js",
    "groupTitle": "Barrel",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/bottleaction/create",
    "title": "Create a bottle action",
    "name": "create",
    "group": "BottleAction",
    "description": "<p>Create a bottle action</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "team",
            "description": "<p>Name of the team performing the bottle action</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Id of the bottle</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Number of bottles concerned (can be negative)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "operation",
            "description": "<p>Operation performed on the bottle (purchased or moved)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "BottleAction",
            "optional": false,
            "field": "bottleAction",
            "description": "<p>The bottle action you've just created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BottleActionController.js",
    "groupTitle": "BottleAction",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/bottleAction/find",
    "title": "Find all bottles actions related to the bar",
    "name": "find",
    "group": "BottleAction",
    "description": "<p>Get the list of all bottle actions</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>An array of bottles actions</p>"
          },
          {
            "group": "Success 200",
            "type": "BottleAction",
            "optional": false,
            "field": "Array.bottleAction",
            "description": "<p>A bottle action object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.bottle.team",
            "description": "<p>Team which produced a bottle action</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.bottle.type",
            "description": "<p>Id of the concerned bottle</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Array.bottle.quantity",
            "description": "<p>Number of bottles sold or moved (can be negative)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.bottle.operation",
            "description": "<p>Operation performed on the bottle (sold or moved)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BottleActionController.js",
    "groupTitle": "BottleAction",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/bottleAction/count",
    "title": "Give the counts of bottles",
    "name": "find",
    "group": "BottleAction",
    "description": "<p>Give the current number of bottle of each type for each team</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BottleActionController.js",
    "groupTitle": "BottleAction",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/bottleAction/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "BottleAction",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BottleActionController.js",
    "groupTitle": "BottleAction"
  },
  {
    "type": "post",
    "url": "/bottleAction/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "BottleAction",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BottleActionController.js",
    "groupTitle": "BottleAction"
  },
  {
    "type": "post",
    "url": "/bottletype/create",
    "title": "Create bottletype",
    "name": "create",
    "group": "BottleType",
    "description": "<p>Create a bottletype</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Complete display name of the bottletype you want to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shortName",
            "description": "<p>Short display name of the bottletype</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "quantityPerBox",
            "description": "<p>Number of bottletypes per box</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "sellPrice",
            "description": "<p>Price at which the bottletypes are sold in cents</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "supplierPrice",
            "description": "<p>Price at which the bottletypes were bought in cents</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "originalStock",
            "description": "<p>Number of bottletypes at the beginning of the event</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "BottleType",
            "optional": false,
            "field": "bottletype",
            "description": "<p>The bottletype you've just created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BottleTypeController.js",
    "groupTitle": "BottleType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/bottletype/:id",
    "title": "Delete a bottletype",
    "name": "destroy",
    "group": "BottleType",
    "description": "<p>Delete the given bottletype</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the bottletype you want to delete</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BottleTypeController.js",
    "groupTitle": "BottleType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/bottletype/find",
    "title": "Find all bottletypes",
    "name": "find",
    "group": "BottleType",
    "description": "<p>Get the list of all bottletypes</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>An array of bottletypes</p>"
          },
          {
            "group": "Success 200",
            "type": "BottleType",
            "optional": false,
            "field": "Array.bottletype",
            "description": "<p>A bottletype object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.bottletype.name",
            "description": "<p>Complete display name of the bottletype</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.bottletype.shortName",
            "description": "<p>Short display name of the bottletype</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Array.bottletype.quantityPerBox",
            "description": "<p>Number of bottletypes per box</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Array.bottletype.sellPrice",
            "description": "<p>Price at which the bottletypes are sold in cents</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Array.bottletype.supplierPrice",
            "description": "<p>Price at which the bottletypes were bought in cents</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Array.bottletype.originalStock",
            "description": "<p>Number of bottletypes at the beginning of the event</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BottleTypeController.js",
    "groupTitle": "BottleType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/bottletype/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "BottleType",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BottleTypeController.js",
    "groupTitle": "BottleType"
  },
  {
    "type": "post",
    "url": "/bottletype/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "BottleType",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/BottleTypeController.js",
    "groupTitle": "BottleType"
  },
  {
    "type": "put",
    "url": "/bottletype/:id",
    "title": "Update bottletype",
    "name": "update",
    "group": "BottleType",
    "description": "<p>Update the given bottletype</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Complete display name of the bottletype you want to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shortName",
            "description": "<p>Short display name of the bottletype</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "quantityPerBox",
            "description": "<p>Number of bottletypes per box</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "sellPrice",
            "description": "<p>Price at which the bottletypes are sold in cents</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "supplierPrice",
            "description": "<p>Price at which the bottletypes were bought in cents</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "originalStock",
            "description": "<p>Number of bottletypes at the beginning of the event</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "BottleType",
            "optional": false,
            "field": "bottletype",
            "description": "<p>The bottletype you have just updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BottleTypeController.js",
    "groupTitle": "BottleType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/errorlog/create",
    "title": "Create an user",
    "name": "create",
    "group": "ErrorLog",
    "description": "<p>Create a log entry</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/ErrorLogController.js",
    "groupTitle": "ErrorLog",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/errorlog/find",
    "title": "Find all items",
    "name": "find",
    "group": "ErrorLog",
    "description": "<p>Get the list of all items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/ErrorLogController.js",
    "groupTitle": "ErrorLog",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/errorlog/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "ErrorLog",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/ErrorLogController.js",
    "groupTitle": "ErrorLog"
  },
  {
    "type": "post",
    "url": "/errorlog/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "ErrorLog",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/ErrorLogController.js",
    "groupTitle": "ErrorLog"
  },
  {
    "type": "post",
    "url": "/message/create",
    "title": "Send a message",
    "name": "create",
    "group": "Message",
    "description": "<p>Send a message</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The message content (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "channel",
            "description": "<p>Target channel name without the # (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Message",
            "optional": false,
            "field": "message",
            "description": "<p>The message that you've juste created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/MessageController.js",
    "groupTitle": "Message",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/message/find",
    "title": "Get all messages",
    "name": "find",
    "group": "Message",
    "description": "<p>Get the list of all messages according to permissions.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>An array of message</p>"
          },
          {
            "group": "Success 200",
            "type": "Message",
            "optional": false,
            "field": "Array.mesage",
            "description": "<p>A message object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Array.mesage.text",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "Array.mesage.sender",
            "description": "<p>Sender User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "Array.mesage.channel",
            "description": "<p>Target channel name without the #</p> <ul> <li><code>public:[teamname]</code> : For subject concerning the team. [teamname] will be converted alphanumeric only</li> <li><code>private:[teamname]</code> : For internal private messages inside the team</li> <li><code>group:[groupname]</code> : For group discutions according to the <code>group</code> field in team</li> </ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/MessageController.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/message/channels",
    "title": "Get channels",
    "name": "getChannels",
    "group": "Message",
    "description": "<p>Get the list of channels according to read permissions</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>An array of channel name (without #)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/MessageController.js",
    "groupTitle": "Message"
  },
  {
    "type": "post",
    "url": "/team/create",
    "title": "Create a team",
    "name": "create",
    "group": "Team",
    "description": "<p>Create an team</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Display name of the team (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group of team used for group messages (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the team in the buildings</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the team (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "team",
            "description": "<p>The team that you've juste created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/TeamController.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/team/:id",
    "title": "Delete an team",
    "name": "destroy",
    "group": "Team",
    "description": "<p>Delete the given team</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the team you want to delete</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/TeamController.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/team/find",
    "title": "Find all teams and subscribe to them",
    "name": "find",
    "group": "Team",
    "description": "<p>Get the list of all teams.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>An array of teams</p>"
          },
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "Array.team",
            "description": "<p>A team object</p>"
          },
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "Array.team.id",
            "description": "<p>Id of the team</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.team.name",
            "description": "<p>Display name of the team</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.team.group",
            "description": "<p>Group of team used for group messages</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.team.location",
            "description": "<p>Location of the team in the buildings</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.team.role",
            "description": "<p>Role of the team</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/TeamController.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/team/:id",
    "title": "Update a team",
    "name": "update",
    "group": "Team",
    "description": "<p>Update the given team</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the team you want to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Display name of the team (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group of team used for group messages (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the team in the buildings</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the team (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "team",
            "description": "<p>The team that you've juste updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/TeamController.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.3.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p>"
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The error description text in version 0.1.0.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./node_modules/apidoc/README.md",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.3.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "version": "0.2.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change a User",
    "version": "0.3.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This function has same errors like POST /user, but errors not defined again, they were included with &quot;apiErrorStructure&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/create",
    "title": "Create an user",
    "name": "create",
    "group": "User",
    "description": "<p>Create an user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>Login of EtuUTT user (required if <code>ip</code> empty, but has to be empty if <code>ip</code> is filled)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>IP of IP user (required if <code>login</code> empty, but has to be empty if <code>login</code> is filled)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Display name of the user (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "team",
            "description": "<p>Associated team ID (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>The user that you've juste created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete an user",
    "name": "destroy",
    "group": "User",
    "description": "<p>Delete the given user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user you want to delete</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/etuutt",
    "title": "Search for an user from the etuutt database",
    "name": "etuuttFind",
    "group": "User",
    "description": "<p>Search from partial fullname in the etuutt db and return a list of 25 matched user with informations which can be usefull to create a new user. User that call this request has to be logged vie EtuUTT.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Search string : part of name, login, or student id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EtuUTTNotConfigured",
            "description": "<p>The server is not configured for the API of EtuUTT</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EtuUTTError",
            "description": "<p>An error occurs during communications with the api of EtuUTT</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotEtuuttUser",
            "description": "<p>Authenticated user is not logged in via EtuUTT</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "EtuUTTNotConfigured",
          "content": "HTTP/1.1 501 Not Implemented\n{\n    \"_error\": {\n        code: 501,\n        status: 'EtuUTTNotConfigured',\n        message: 'The server is not configured for the API of EtuUTT'\n    }\n}",
          "type": "json"
        },
        {
          "title": "EtuUTTError",
          "content": "HTTP/1.1 503 Service Unavailable\n{\n    \"_error\": {\n        code: 503,\n        status: 'EtuUTTError',\n        message: 'An error occurs during communications with the api of EtuUTT'\n    }\n}",
          "type": "json"
        },
        {
          "title": "LoginNotFound",
          "content": "HTTP/1.1 403 Unauthorized\n{\n    \"_error\": {\n        code: 403,\n        status: 'NotEtuuttUser',\n        message: 'Authenticated user is not logged in via EtuUTT'\n    }\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/find",
    "title": "Find all users and subscribe to them",
    "name": "find",
    "group": "User",
    "description": "<p>Get the list of all users.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>An array of user</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "Array.user",
            "description": "<p>An user object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.user.login",
            "description": "<p>Login of EtuUTT user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.user.ip",
            "description": "<p>IP of IP user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Array.user.name",
            "description": "<p>Display name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "Array.user.team",
            "description": "<p>Associated team ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/avatar/:id",
    "title": "Get avater of given user",
    "name": "getAvatar",
    "group": "User",
    "description": "<p>Get avatar of the given user. No authentication required. If the user or the avatar is not found, a default avatar will be shown</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "User",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/TeamController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "User",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/MessageController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "User",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/MessageController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "User",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/SessionController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "User",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "User",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/SessionController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/unsubscribe",
    "title": "Unsubscribe from new items",
    "name": "subscribe",
    "group": "User",
    "description": "<p>Unsubscribe from new items</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/subscribe",
    "title": "Subscribe to new items",
    "name": "subscribe",
    "group": "User",
    "description": "<p>Subscribe to all new items.</p>",
    "version": "0.0.0",
    "filename": "./api/controllers/TeamController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update an user",
    "name": "update",
    "group": "User",
    "description": "<p>Update the given user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user you want to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>Login of EtuUTT user (required if <code>ip</code> empty, but has to be empty if <code>ip</code> is filled)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>IP of IP user (required if <code>login</code> empty, but has to be empty if <code>login</code> is filled)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Display name of the user (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "team",
            "description": "<p>Associated team ID (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>The user that you've just updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "notfound",
            "description": "<p>Item cannot be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        },
        {
          "title": "notfound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"_error\": {\n        code: 404,\n        status: 'notfound',\n        message: 'Item cannot be found'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/avatar/:id",
    "title": "Upload avater of given user",
    "name": "uploadAvatar",
    "group": "User",
    "description": "<p>Upload avatar of the given user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "avtar",
            "description": "<p>Avatar image, in jpg max 200x200px</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UserController.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Parameters are not valid for this api endpoint</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "forbidden",
            "description": "<p>You are not authorized to to that</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"_error\": {\n        code: 400,\n        status: 'BadRequest',\n        message: 'Parameters are not valid for this api endpoint'\n    }\n}",
          "type": "json"
        },
        {
          "title": "forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"_error\": {\n        code: 403,\n        status: 'forbidden',\n        message: 'You are not authorized to to that'\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "_home_alabate_dev_flux2_server_apidoc_main_js",
    "groupTitle": "_home_alabate_dev_flux2_server_apidoc_main_js",
    "name": ""
  },
  {
    "type": "GET",
    "url": "/account/login",
    "title": "Signin with an existing user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "rememberme",
            "description": "<p>Checkbox to auto-login on revisit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Your e-mail-address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Your password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./node_modules/apidoc/EXAMPLES.md",
    "group": "_home_alabate_dev_flux2_server_node_modules_apidoc_EXAMPLES_md",
    "groupTitle": "_home_alabate_dev_flux2_server_node_modules_apidoc_EXAMPLES_md",
    "name": "GetAccountLogin"
  },
  {
    "type": "GET",
    "url": "/account/register",
    "title": "Register a new user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "terms",
            "description": "<p>Checkbox to accept the terms.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Your e-mail-address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Your password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Your firstname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Your lastname.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Your birthday.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./node_modules/apidoc/EXAMPLES.md",
    "group": "_home_alabate_dev_flux2_server_node_modules_apidoc_EXAMPLES_md",
    "groupTitle": "_home_alabate_dev_flux2_server_node_modules_apidoc_EXAMPLES_md",
    "name": "GetAccountRegister"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./node_modules/apidoc/template/main.js",
    "group": "_home_alabate_dev_flux2_server_node_modules_apidoc_template_main_js",
    "groupTitle": "_home_alabate_dev_flux2_server_node_modules_apidoc_template_main_js",
    "name": ""
  }
] });
