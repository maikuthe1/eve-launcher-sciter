cmake_minimum_required(VERSION 3.0)

project(eve-launcher-sciter)

if(UNIX AND NOT APPLE)
    find_package(PkgConfig REQUIRED)
    pkg_check_modules(GTK3 REQUIRED gtk+-3.0)
    include_directories(${GTK3_INCLUDE_DIRS})
    link_directories(${GTK3_LIBRARY_DIRS})
    add_definitions(${GTK3_CFLAGS_OTHER})
    set(LIBRARIES ${LIBRARIES} ${GTK3_LIBRARIES})
endif()

include_directories(/home/maiku/Documents/Projects/sciter-js-sdk-main/include)

file(GLOB SOURCES src/*.cpp)

add_executable(eve-launcher-sciter ${SOURCES})

# Compile resources into reosurces.cpp with sciter packer
add_custom_command(
  TARGET eve-launcher-sciter
  PRE_BUILD
  COMMAND ./packfolder
  ARGS /home/maiku/Documents/Projects/eve-launcher-sciter/ui/ /home/maiku/Documents/Projects/eve-launcher-sciter/src/resources.cpp -v "resources"
  WORKING_DIRECTORY
  /home/maiku/Documents/Projects/sciter-js-sdk-main/bin/linux/
  )

target_link_libraries(eve-launcher-sciter ${LIBRARIES})


#install(TARGETS eve-launcher-sciter RUNTIME DESTINATION bin)
