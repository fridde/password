#!/bin/bash

sed '/#HERE#/ r owncode.js' <base.html >tempfile
sed '/#TOO#/ r extcode.js' <tempfile >password.html
rm tempfile