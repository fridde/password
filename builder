#!/bin/bash

sed '/#CONFIG#/ r config.js' <base.html >tempfile1
sed '/#OWNCODE#/ r owncode.js' <tempfile1 >tempfile2
sed '/#EXTCODE#/ r extcode.js' <tempfile2 >password.html
rm tempfile1
rm tempfile2