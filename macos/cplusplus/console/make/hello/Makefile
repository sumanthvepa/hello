.PHONY: all clean

all: hello

hello: hello.cc
	c++ --std=c++17 -Wall -Wextra -Wpedantic -Weverything -Wno-poison-system-directories -g3 -o $(@) $(<)

clean:
	rm -fr hello hello.dSYM
