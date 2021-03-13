all: hello.exe
# Build the hello executable from the command line
hello.exe: hello.cc
	cl /std:c++17 /EHsc /Zi /Wall /Fohello hello.cc

clean:
	! del /F /Q hello.exe *.ilk *.pdb *.obj
