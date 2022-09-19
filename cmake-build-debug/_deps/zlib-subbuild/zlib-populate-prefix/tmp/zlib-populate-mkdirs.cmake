# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "W:/eve-launcher-sciter/extlibs/elzip/extlibs/minizip/lib/zlib"
  "W:/eve-launcher-sciter/cmake-build-debug/_deps/zlib-build"
  "W:/eve-launcher-sciter/cmake-build-debug/_deps/zlib-subbuild/zlib-populate-prefix"
  "W:/eve-launcher-sciter/cmake-build-debug/_deps/zlib-subbuild/zlib-populate-prefix/tmp"
  "W:/eve-launcher-sciter/cmake-build-debug/_deps/zlib-subbuild/zlib-populate-prefix/src/zlib-populate-stamp"
  "W:/eve-launcher-sciter/cmake-build-debug/_deps/zlib-subbuild/zlib-populate-prefix/src"
  "W:/eve-launcher-sciter/cmake-build-debug/_deps/zlib-subbuild/zlib-populate-prefix/src/zlib-populate-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "W:/eve-launcher-sciter/cmake-build-debug/_deps/zlib-subbuild/zlib-populate-prefix/src/zlib-populate-stamp/${subDir}")
endforeach()
