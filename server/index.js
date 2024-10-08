const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

dotenv.config();
const PORT = process.env.PORT || 3001;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EduHub-Web API",
      version: "1.0.0",
      description: "EduHub API created with NodeJs & ExpressJs",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express(); 
app.use(cors());
app.use(express.json());

require("./db/connection");

app.use(require("./routes/authRoutes"));
app.use(require("./routes/protectedRoutes"));

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// starting express server on port 3001 or process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
