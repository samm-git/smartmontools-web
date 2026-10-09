# Serveradmins Todo List <a id="ServeradminsTodoList"></a>


## Backup <a id="Backup"></a>

- cron jobs for the system ~~and trac backup~~. **Update:** trac backup done, system - todo
- ~~encryption of the backups?~~  **Update:** done
- ~~copy trac and system backups to the remote host~~ **Update:** done by dipohl

## Security <a id="Security"></a>
- ~~Redirect http://www.smartmontools.org/login to https://www.smartmontools.org/login~~
- ~~Even better: Always redirect to https if logged-in ~~

Done, both items

## Nagios monitoring <a id="Nagiosmonitoring"></a>
- ~~web server status~~
- ~~tracd status~~
- ~~system load~~
- ~~postfix status~~
- svn sync status
- ~~free disk space~~
- ~~ssl certificate validity~~
- DNS validity
- ???
## Fight with spam <a id="Fightwithspam"></a>
We have a lot of spammers last days, mostly from pacistan. For now i just created a shell script to remove posts+user by running CLI tool (`/home/samm/removeuser.sh`) but it seems to be not sufficient. We should try to install http://trac.edgewall.org/wiki/SpamFilter and see how it works for us. 

### Trac GUI for user management is not usable <a id="TracGUIforusermanagementisnotusable"></a>
We have currently a number of around 14k accounts. This causes that calling menu point `users` is loading forever..

Workaround to set mail address for password reset is changing the entry directly on db with

`mysql> update session_attribute set value='<mail address>' where name='email' and sid='<user>';`

### Script to remove spammer accounts <a id="Scripttoremovespammeraccounts"></a>

Alex made the following concept for a script:

```
Loop (usernames from accounts not having an email address like '<user>@users.sourceforge.net')
  check if there are any wiki articles, bug reports, etc for such username. if any - process next
  check if user registred > 6 months ago to not remove just-added users
  remove user
End Loop 
```

### Integrate re-captcha <a id="Integratere-captcha"></a>

We need to protect new registrations with google re-captcha or we will end with the same result (high number of spammer accounts) after all

- https://trac-hacks.org/wiki/RecaptchaRegisterPlugin
- https://www.google.com/recaptcha/intro/index.html

## improve documentation <a id="improvedocumentation"></a>
Document all trac and system changes in the serverarch doc.

## buildbot for CI <a id="buildbotforCI"></a>

Subject to check, not urgent
