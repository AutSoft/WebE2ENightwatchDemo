#!/bin/bash
sed -i -e 's/chromedriver.exe/chromedriver/g' nightwatch.json
sed -i -e 's/geckodriver.exe/geckodriver/g' nightwatch.json
chmod +x ./bin/chromedriver
chmod +x ./bin/geckodriver