g4:
	antlr src/example/antlr/Lang.g4

java: g4
	javac src/example/antlr/Lang*.java

run: java
	pushd src/example/antlr; \
	grun Lang program -trace -gui Lang.example; \
	popd

tokens: g4
	pushd src/example/antlr; \
	grun Lang program -tokens Lang.example; \
	popd

js: g4
	antlr -Dlanguage=JavaScript src/example/antlr/Lang.g4
