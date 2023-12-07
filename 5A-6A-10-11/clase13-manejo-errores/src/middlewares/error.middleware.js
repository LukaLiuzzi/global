import fs from "fs"

export const errorMiddleware = (err, req, res, next) => {
  console.log(`ERROR MIDDLEWARE`, err)
  if (typeof err.toJson === "function") {
    console.log(err.toJson())
    res.status(err.status || 400).json(err.toJson())
  } else {
    console.log(err.stack)
    res.status(500).json({
      name: "UnknownError",
      status: "ERROR",
      message: "Algo salió mal",
    })
  }

  //   if (fs.existsSync("./erros.log")) {
  //     fs.appendFileSync(
  //       "./erros.log",
  //       `\n${new Date().toLocaleString()} ${err.message}`,
  //       "utf-8"
  //     )
  //   } else {
  //     fs.writeFileSync("./erros.log", err.message, "utf-8")
  //   }
}
