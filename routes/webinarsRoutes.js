const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));
const { body, param, validationResult } = require("express-validator");
