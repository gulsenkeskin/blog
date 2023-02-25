import { db } from "../db.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
  //kullanıcı zaten kayıtlı mı?
  const q = "SELECT * FROM users WHERE email=? OR username=?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Kullanıcı zaten kayıtlı");

    //şifreyi hash'le ve kullanıcı oluştur
    const bcrypt = require("bcrypt");
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";

    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Kullanıcı oluşturma işlemi başarılı");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
