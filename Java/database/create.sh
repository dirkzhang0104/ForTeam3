#!/usr/bin/env bash
basedir=$(dirname $0)
DATABASE=stem_game
createdb -U postgres $DATABASE &&
psql -U postgres -d $DATABASE -f "$basedir/schema.sql"