  
# Python program to find SHA256 hash string of a file
import hashlib
import sys

electronVersion = sys.argv[1]
filename = "electron-v" + electronVersion + "-win32-x64.zip"

sha256_hash = hashlib.sha256()

digest = ""
with open(filename,"rb") as f:
    # Read and update hash string value in blocks of 4K
    for byte_block in iter(lambda: f.read(4096),b""):
        sha256_hash.update(byte_block)
    digest = sha256_hash.hexdigest()

hashFileName = "SHASUMS256.txt"
with open(hashFileName, "w") as f:
    f.write(digest)
    f.write(" *")
    f.write(filename)
    f.write("\n")