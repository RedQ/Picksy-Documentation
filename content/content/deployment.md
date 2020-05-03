---
title: 'Deployment'
metaTitle: 'Picksy Documentation'
metaDescription: 'Picksy Documentation'
---

# Deployment

We have provided **now.json **file with necessary env variables so that you can easily deploy this project into [now](https://vercel.com/) .

Before you proceed for the next step make sure you have a [now account](https://vercel.com/download).

Follow the below steps to setup now cli

i\) install now cli to your machine from [here](https://vercel.com/download)

ii\) login into to [now ](https://vercel.com/docs/now-cli#commands/login) using **now login **command

To deploy the Picksy to your now server run the picksy in **production mode**

Run below commands for Production in the Picksy room directory where we have the package.json file

1. yarn
2. yarn build
3. now \(for first time after that run **now --prod**\)

that's it.
