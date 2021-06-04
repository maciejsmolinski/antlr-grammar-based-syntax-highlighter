g4:
	antlr src/support/lang/Lang.g4

java: g4
	javac src/support/lang/Lang*.java

run: java
	pushd src/support/lang; \
	grun Lang program -trace -gui Lang.example; \
	popd

tokens: g4
	pushd src/support/lang; \
	grun Lang program -tokens Lang.example; \
	popd

js: g4
	antlr -Dlanguage=JavaScript src/support/lang/Lang.g4
