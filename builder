#!/bin/bash

sed '/#SALT#/ r salt.js' <base.html >tempfile1
sed '/#HERE#/ r owncode.js' <tempfile1 >tempfile2
sed '/#TOO#/ r extcode.js' <tempfile2 >password.html
rm tempfile1
rm tempfile2