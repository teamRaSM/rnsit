#!/usr/bin/python

import os, sys

# Open a file
path = "C:/Users/Utkar/Documents/GitHub/RNSIT-redesign/images/com-logos"
dirs = os.listdir( path )

# This would print all the files and directories

for file in dirs:
   print ('"'+file, end = '",')

