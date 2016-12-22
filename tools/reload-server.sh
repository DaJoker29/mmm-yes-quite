#!/bin/sh
# Reload server with new configuration settings.
pm2 delete myq
npm run prod