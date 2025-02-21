---
title: Snippets
description: A reference page for common how-to
sidebar:
  order: 1
---

![An illustration of planets and stars featuring the word “astro”](https://raw.githubusercontent.com/withastro/docs/main/public/default-og-image.png)


### Generating Types

```
yarn api:generate-types
```

### Configure custom aws profile

```
aws configure --profile saurabhnemade
```

### Activate custom aws profile

```
export AWS_DEFAULT_PROFILE=saurabhnemade
```

### Get AWS token locally for current profile
```
aws sts get-caller-identity
```