.PHONY: all clean

all: hello

hello: hello.cc
	g++ --std=c++17 -Wall -Wextra -Wpedantic -g3 -o $(@) $(<)

clean:
	rm -fr hello
