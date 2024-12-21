import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import node from "eslint-plugin-n";
import prettier from "eslint-config-prettier";

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	node.configs["flat/recommended"],
	prettier,
	{
		rules: {
			"n/no-missing-import": "off",
		},
	},
);
