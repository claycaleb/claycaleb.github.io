I need to remember to clone like this (SSH):
```
git clone git@github.com:username/repo.git
```

NOT this (HTTPS):
```
git clone https//:github.com/username/repo
```

If I forget, I can use this:
```
# Change remote from HTTPS to SSH
git remote set-url origin git@github.com:username/repo

# Verify it changed
git remote -v
```
