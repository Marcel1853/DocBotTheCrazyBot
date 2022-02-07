---
id: GworksId
title: GWorks ID
---


### About GWorks-ID

GWorks ID is a PHP based auth system for Websites and Apps. You can use it to login users to your Websites or Apps without save their information.

### Default URI's

<b>Authorization Page</b>

`https://id.g-works.eu/auth/clientID=(AppID)&redirectURI=(Redirect Link)`

<b>User Information</b>

`https://id.g-works.eu/v2/userData/?token=(token)`

This response with json, that include:

- Username
- Email
- Profile Image
- Permissionlevel at GWorks


### First steps to create an app

> 1. Create an Account <a href="https://id.g-works.eu/">here</a>

> 2. After you created and verified your account log in to the dashboard

> 3. Go to Applications and Click on <b>Let us create an App</b>

![IMG](https://img.g-works.eu/2021-06-30_17-46.png)

> 4. Now you have your first app. Click now on the Gear to view or edit your app.

> 5. Here you can find now your App-ID. For use add a redirect URI at the form at the end of the Page that links to your websites callback page!

![IMG](https://img.g-works.eu/2021-06-30_17-55.png)

> :white_check_mark: You're ready now. You can try it now. Use for this the Authorization page URL and replace `(AppID)` with your app ID and `(Redirect Lnik)` with your Redirect link you added in Step. 5!
