var import_esbuild = require("esbuild");
var import_path = require("path");
const result = (0, import_esbuild.transform)("(()=><a>\u6211\u662FA\u6807\u7B7E</a>)()", {
  minify: true,
  jsxFactory: "VUE_H_FUN",
  jsxFragment: "VUE_FRAGMENT_TAG",
  loader: "jsx"
}).then((res) => {
  console.log(res);
});
