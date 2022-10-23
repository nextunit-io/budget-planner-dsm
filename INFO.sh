#!/bin/bash

source /pkgscripts-ng/include/pkg_util.sh

package="BudgetPlanner"
version="0.0.1"
os_min_ver="7.0-40000"
maintainer="nextunit.io"
maintainer_url="https://nextunit.io"
distributor="nextunit.io"
distributor_url="https://nextunit.io"
silent_upgrade="no"
arch="noarch"
dsmappname="io.nextunit.budgetplanner"
displayname="[nextunit.io] Budget Planner"
displayname_enu="[nextunit.io] Budget Planner"
displayname_cht="[nextunit.io] Budget Planner"
description="Budget planner for private usage"
description_enu="Budget planner for private usage"
description_cht="Budget planner for private usage"

[ "$(caller)" != "0 NULL" ] && return 0

pkg_dump_info