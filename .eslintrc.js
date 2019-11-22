module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "@vue/prettier"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		// 缩进使用不做限制
		"indent": 'off',
		// 允许使用tab
		"no-tabs": 'off',
		"max-len": [
			"error",
			{
				"code": 500,
				"ignoreUrls": true
			}
		],
	},
	parserOptions: {
		parser: "babel-eslint"
	}
};