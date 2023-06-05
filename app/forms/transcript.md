0:00
Mhm Because definitely this is something we might want to reference, feel free to clone or download.

0:09
This just do not fork this repo.

0:12
If you fork the repo, the contributors already attached this repo will get passed on to your repo.

0:17
So pretty pretty, please either give it a clone or a download.

0:22
I have already done that and have it open for us.

0:26
So first off, we are gonna walk through getting this up and running in development.

0:32
There are a few different things happening here.

0:36
This all is in the read me.

0:39
So this is an incredibly valuable read me showing pretty form.

0:44
Again, this is why we told you to not make a read me in your project repo because you will want to keep this one for sure.

0:52
Cool.

0:53
If you don't even know what fork means, then again, I'm not going to teach you.

0:56
You do not want to first thing again, we've done cloning or downloading.

1:02
Either one's gonna work.

1:04
Installing our dependencies looks slightly different.

1:07
I'm going to get this running first, but then we will certainly talk about.

1:13
So again, remember our project starter here will be deployed we haven't deployed any Python so far.

1:19
So this is certainly different when we deploy a project, we want to use something called a requirements dot text.

1:28
I speak a little bit as to why we check out our pip file.

1:32
This particular pit file does have versions all pinned and nice that is outstanding and also not helpful to show us off.

1:43
So let's grab something we've been working on together over the past couple of weeks to do pit file here.

1:51
This is typically what we've been having our pip files, like again, just going ahead and ups installing latest, which is totally cool.

1:59
But when we have a app that is going into production and also our apps will use continuous deployment.

2:06
So any time we push something new to whatever branch we've set that up on probably our main branch, it will automatically deploy for us.

2:16
Now, most of the time that's really helpful and great again, once we've set up the whole deployment, just pushing the main will redeploy our site for us shouldn't have much of a problem.

2:27
So, really cool to have that.

2:30
But let's say one of our dependencies updates, you guys didn't have it.

2:35
But the last cohort actually had its last sequel alchemy update during the week, we teach it the day it actually updated.

2:42
We had some struggles again, brand new version, compatibility was not great with everything.

2:48
You don't want that happening to your live site.

2:51
You don't want it to automatically decide to update to a new version of one of your dependencies without you being fully aware of it and being able to test to see if it's going to cause bugs or not.

3:03
So this is why we want to use a requirements dot Text A requirements dot Text is generated off of your pip file.

3:13
So again, super easy.

3:14
It's just made for us.

3:15
I'm not even looking at it, but literally, it tells us right here.

3:20
One of the commands we can use to regenerate it should we want to.

3:24
There is another command.

3:26
It will depend slightly on your version of P pe N B but requirements dot text will always have pinned versions.

3:35
This does not automatically get updated.

3:38
We have to choose to update it all of our pip file.

3:42
So that's super important.

3:44
If we use requirements dot text for our installs, we can't have any of our packages automatically accidentally update without us knowing.

3:54
So again, it's just basically a way to pin your versions to an exact precise version so that you don't automatically do an update on a list again, really just to regenerate it.

4:08
We would do Pippy and B lock dash dash requirements.

4:11
Believe the other one is Pippy and V requirements.

4:15
Again, it's gonna depend on what version you have, but it totally installed all of my things for me.

4:21
Again, if I come to my library, I've got flash G unicorn, all of the dependencies that were again included in my file.

4:32
Any questions on our requirements dot text, it does also mean that as you add dependencies to your project, if you will need to, you will need to regenerate this requirements dot text again, each time, literally, right here in the requirements dot text, it tells you how to make it so good right in the front or again, you could definitely do a Go a Google for regenerating a requirements dot text.

5:04
It will show you this one as well as any other.

5:07
Again, it just is going to depend on your version of pe and V which one you need.

5:14
That's how you install from it again right here, pip and be installed dash R requirements dot text.

5:21
So that's how you do it.

5:23
It's you already have it like again, this requirements dot Text has already been generated off of the pip pot file for you to use.

5:32
It's only if you change any of your dependencies, you will need to regenerate it again, command to do so is literally right at the top of a file.

5:44
Again, it is important to be using it because again, these applications will be seeing production and we do not want our dependencies in production to ever ever just go ahead and update on their own.

5:58
That is why we use this requirements dot text.

6:05
Cool.

6:08
So next up, we do need some dot E N V S again, typically is a good idea to give an E N V dot example.

6:17
For this particular one, we can just go ahead and copy it and make a brand new dot D F V.

6:25
Basically just pasting these in here.

6:31
Let's see for our Flask E N V again, we probably want to change this to Flask debug.

6:44
And definitely we'd wanna change that to, you know, flask E and B equals production or flask debug equals false.

6:52
When we go ahead and deploy, make sure the SQL I three database connection U R I is in our E N B.

7:01
We certainly did have that here.

7:03
Again, you will find in your application.

7:06
There's just a DEV dot DB hanging out there.

7:09
You can totally delete that.

7:11
That is a remnant from when sequel Alchemy did not always just automatically throw your DEV DB into that instance folder that it does.

7:21
Now at some point, it actually did just drop it inside of the app.

7:27
So again, you can delete that one.

7:28
You can keep it there totally up to you all.

7:33
Again, it's going to make a new one for us in the correct place.

7:38
Once we start running our database command, the starter does organize our tables on a flash schema.

7:46
This is something we'll be talking about again because we are going into production.

7:51
We are only allowed a single instance of postgres in production.

7:55
You already have created that and are using that in your mod 45 project, we are going to use the same database.

8:03
That's why we need a flask schema.

8:05
So we can create these almost sub databases in the same database.

8:10
And again, when the database is queried, the first thing it's gonna look for is a schema.

8:15
And then within that schema, it'll start looking for our tables and the data we want note that again, while that database is totally connected to your MOD five project, you are going to want to be deleting it over the next week and remaking it simply because that is going to be the fastest way.

8:35
If you have a migration in there, that's a bad migration or you need to fix it.

8:40
Unfortunately, while again, render does have the ability for us to, you know, actually run commands to do that.

8:47
You have to pay money to get a terminal in render, to do that.

8:51
So the best way for our uses is to just delete that database, make a brand new one.

8:57
There are some impacts of again, your MOD five project, you'd have to reconnect that database, provide it with the new database URL, run your migrations on that too.

9:08
I I would recommend just let it go for the next week.

9:12
Once your group project is done, go ahead and run those commands or you might want to wait because again, you're probably gonna have to do the same thing in your Capstone that's coming up.

9:22
Eventually, you will be done developing all these things.

9:25
And again, can just have them all using the same database as you enter your job hunt.

9:31
But again, for this project and the next project, it's just going to be the easiest way to fix database issues.

9:39
Remember that this already does have a migrations folder.

9:43
It already does have a migration.

9:45
We've got a user table set up already.

9:48
Whenever you get an application that has that DB A N and D V migrate are two things you do not need to do.

9:55
We can just skip those, go straight to an upgrade to apply those wonderful tables blasting up.

10:16
Beautiful.

10:17
Again, it should have made that instance folder for you put your DEV DB in here.

10:23
We know we can take a peek at it with a sequel I viewer.

10:28
Oh Look at that.

10:29
We totally now have a user table outstanding.

10:33
This starter also has our seed commands built in as well.

10:38
Lovely flash cli so we can do a hip and run flask seed off and apply basically just a little bit of user seed data.

10:51
If we do a refreshing here, we now have three users demo, Mar Marie and Bobby.

10:59
To be honest, I have no idea where we came up with Marie and Bobby, but I feel like you had similar demo users maybe an off me.

11:06
So again, you've got them here in this one as well.

11:10
Feel free to change all the seed data you would like.

11:14
But again, it does at least come set up with a user model and a little bit of seed data, we can totally now start our server should hopefully start up for us.

11:33
Hey, beautiful.

11:36
We do also have a React front end in here that is located in a different folder or React app.

11:45
There is a very small read me inside our React app in case we do not remember how to get a React app up and running.

11:52
But ultimately, we will need to CD into that and run our N PM install here that will take a minute or two.

12:09
But once it's done, we can do our N PM start and we will see all the glory and splendor.

12:14
That is the Flask project starter.

12:17
Again, the front end is not going to be beautiful like CS S is totally gonna be up to you.

12:23
But once we see it up and running, we totally do have off fully stubbed out.

12:28
The only thing you really should need to do with off is to somehow handle a demo user.

12:34
Again, we've got a demin user actually existing.

12:36
But the functionality of how that demo user is going to log themselves in.

12:41
Again, there are different ways you might want to handle it.

12:43
So we don't implement that for you, but otherwise log in, sign up and log out totally all implemented in here.

12:51
We will again walk through all of the code we've got, once we've got our app up and running in development.

13:00
Yeah.

13:00
Right.

13:01
Didn't we miss those node modules?

13:02
How long they take?

13:03
Especially with React.

13:05
, the file structure shouldn't be too different to us again.

13:11
We've got an API for our routes.

13:13
A forms, folder, a models, folder, a seeds, folder, thunder and need a config migrations.

13:19
The new thing here really is.

13:20
There's a React app for us.

13:24
Mhm.

13:25
Mhm.

13:33
I don't want that ugly one to got that saved.

13:39
We can save that.

13:40
It's actually up and running.

13:43
we will want to come back to looking at this wonderful one though.

13:54
and we will run it once this is finished but the read me is gonna continue to help you out because it does have a deployment walkthrough as well.

14:06
Yeah, again, don't call it off me.

14:07
This is a very different starter.

14:10
You have to do work for them, right?

14:11
I mean, Dan still makes you guys build that right?

14:14
Just I'm just giving this out.

14:20
Ok?

14:21
You love those N PM installs.

14:27
Let me see.

14:32
I will do a break at some point.

14:37
Yeah, we probably will see.

14:39
Let me get that one cool thing.

14:43
I guess I can show you while we're waiting because I don't need the front end for this one.

14:51
I'm gonna hit vocal host 5000.

14:55
No, not six 5000.

14:59
There's one really cool route that we include in the starter.

15:04
I think it's actually in the D and it camp just not remembering what exactly the URL was API slash docs right here, kind of some cool functionality that is built in sort of to flask.

15:26
So this actually is kind of building your back end documentation for you.

15:31
Again, this is a Jason object.

15:35
Whenever we return a dictionary, this is a dictionary right?

15:42
From a route, it automatically Jason ser realizes it for us.

15:46
They list comprehension, basically just going through all of the methods and end points that are attached to flask and printing them out for us.

15:55
So like this would be our home route or our index route at a get this text here is your docs string.

16:02
So if you go ahead and write docs strings, as you are building your application, you can just hit this route here.

16:10
API docs and basically you could copy and paste this into your documentation, neither your back end.

16:17
So kind of a neat thing that's built in here again, just a list comprehension.

16:23
But again, you need to hit your back end directly.

16:26
There's no route connected to react to generate this.

16:29
So just hit the server directly at the API docs path here.

16:36
Let's see how a we're done there.

16:41
It did not like me doing something but we totally found it too.

16:46
So with our friend and up and running, we can finally do an N PM start and see what this looks like.

17:03
There's only so much we can do with it, Katie.

17:05
Again, it is a comprehension basically just grabbing methods or details on our app.

17:11
So as far as like formatting it nicer send it to a template and make it prettier.

17:21
But I mean, otherwise this is just printing out really a dictionary with basically our URL S as the keys.

17:40
What is the problem?

17:43
Really?

17:45
That's unfortunate.

17:51
I have something else with it running.

17:55
Yeah, probably right.

17:57
Oh, look at that.

18:00
Something happened from yesterday.

18:02
That'll do it.

18:07
No.

18:13
Hey, that looks better.

18:17
Let's take away this one because we're gonna want our react front end.

18:28
Mhm.

18:39
Feel like templating is faster than react.

18:45
But that's interesting.

19:01
Oh, but it ran anyway for cool.

19:05
So again, I didn't say it was beautiful.

19:07
What it is is functional.

19:10
We have a sign up modal for you.

19:12
We even have a login modal too if you want those credentials are not gonna work.

19:18
But what should work is the demo user credentials.

19:24
Wherever those seeds, user demo at a A dot I O password, that's a tricky one.

19:35
Gotta remember that we are now logged in.

19:45
We have our info here.

19:47
We have the ability to log out.

19:49
We can of course sign in a new user.

19:56
Yeah, I'm gonna go with what Claudia said for sure.

20:00
Again, there's a lot of functionality here for you already.

20:04
A lot of basically boiler plate plate code.

20:07
And again off is implemented.

20:10
You just now need to take this and turn it into your fantastic clone project.

20:17
That's getting it up in a development and not too much new here, that requirements, that text is certainly a brand new one, but otherwise not so bad.

20:30
Do we have any questions on getting this up and running as we just did?

20:48
Who?

20:49
All right.

20:50
So 12 11 been at this for an hour and 10 minutes, I can't promise you how long it's gonna take to get through talking about the files because it's kind of very likely depend on how many questions you all have.

21:07
So do we wanna like pause for a five minute break before we jump into?

21:11
That could be like 30 minutes could be an hour.

21:15
Probably a good time for a quick break.

21:17
Katie needs a break.

21:18
Let's do it.

21:20
I couldn't agree more.

21:22
I am just gonna go ahead.

21:31
So we have now gotten the starter working in development next up.

21:38
I'm just gonna start or stop these servers for now and let's walk through all of the code we've got here.

21:48
Typically, I like to start basically like route down.

21:53
So we'll go through all of the folders and stuff here and then we'll dive deep, dive into our app folder, which certainly has plenty in it.

22:02
So we did talk about requirements dot text again.

22:06
Remember this is what we want to install from.

22:09
This is also something that needs to be regenerated when we change our dependencies, it does tell us right here one of the ways to regenerate it.

22:19
So super helpful, we got our read me that gives us not only setting it up in development but deployment instructions.

22:28
So again, definitely wanna save this.

22:30
Remember, you do need to actually have a documentation, read me in your project repo so maybe we want to rename it something just to be like, I don't know and render dot MD again, provide it, you call it something else.

22:46
You can then now add an actual read me to your project.

22:51
Hopefully, we know what a pip file and a pip file, a lock are.

22:56
Again, you can totally install using this pip file in development if you want no big difference.

23:03
But when we go to deployment, we will need the requirements dot text.

23:08
We'll see that a little bit later.

23:09
When we deploy, we do have a get ignore.

23:13
There is actually a second get ignore hidden inside the React App folder.

23:18
So again, if this get ignore, doesn't show react type stuff you'd want to ignore.

23:23
Don't be surprised.

23:24
Also highly suggest you add your DEV dot DB to your did ignore.

23:30
You do not want to push that up to your version control.

23:35
We haven't really cared about it at any of the projects to date, but now that you're going to have four developers working that DEV A B is basically a merge conflict explosion waiting to happen.

23:51
Just think you and your pair are working on.

23:55
I don't know one of your features you decide.

23:57
Hey, let's try testing, adding a bunch of new posts.

24:00
We gotta do that.

24:02
The rest of your team has been working on users.

24:04
They added three new users because they wanted to test that out.

24:08
Now we try to merge everything in your databases are highly out of sync.

24:13
You've added some posts that the other members of your team don't have.

24:16
They've added some users that you don't have.

24:19
That file is now different for all of you merge conflicts and sue.

24:24
So pretty please get ignore that DEV dot DB.

24:27
So that doesn't happen again.

24:29
You're each locally building that anyway.

24:32
And technically in production you're not building at all because you're using post.

24:37
So we've got our kid ignorance, our Flask E N V then usual stuff in here that E N V example is super nice to actually make that dot E N V again.

24:49
If we're gonna have any API keys, any other E N V s we need, we'd add them here if they need to be secret again.

24:57
Remember the dot Flask E N V should not be secret.

25:00
This should be pushed to a version control.

25:06
We have a React app here.

25:07
I'm not gonna spend a lot of time on this because I did not teach you all react.

25:12
But the example and this is something that your react potentially needs here.

25:19
Although again, in local post, we just have the proxy right here.

25:26
So technically, we should not need this.

25:29
We do need this in production, but again, we will not be putting it in our file structure.

25:35
So we really can ignore the E N V example here, we've got a store set up already with a session to handle your authentication.

25:45
That's pretty nice.

25:46
Again, just go ahead and add additional stores for your other resources.

25:51
Context is even set up for you for our modals.

25:55
Again, you can just use add to this as needed.

25:59
We have some components stubbed out, basically log in.

26:04
There's a form and a modal for both log in and sign up again.

26:08
Some of us like models, some of us wanna forms, technically, there are forms as well as modals.

26:15
It is using the models but totally easily you could refactor them as we saw not a ton of CS S but hey, just enough to be a helpful start for a React app.

26:29
Oh This is where we're gonna get into stuff that's like important.

26:34
So our migrations definitely not Katie, you all passed MOD five.

26:40
You had a special one.

26:42
That's all the store stuff you are gonna get, you still have all the resources you used to do it in MOD five available for you.

26:49
So again, there's only so many times we can go through that for you.

26:55
Our migrations, they added some different custom stuff starting here.

27:00
So again, definitely want to pay attention to that.

27:04
We do already have a single migration.

27:08
You can either make more ones or again, you could delete this and start from scratch totally up to you.

27:16
The migrations do need some custom code added to them.

27:20
Basically this section on importing and getting a couple environmental variables that are very important to us.

27:28
And then after every single table in a migration, we do need a conditional for production again in production, we need to place a schema in front of all of our tables.

27:41
This is gonna be a lot of code, well, not a lot of code.

27:44
There's going to be code in our models in our migrations that we have to insert or change because of that, we've got to have this schema in production again, in development, we do not care.

27:55
We're using a sequel I file reduction.

27:58
We are going to use a database that has other schemas in it.

28:03
Now, if you don't remember this, that is totally cool.

28:07
We have two great resources.

28:10
Honestly, they're the same resource.

28:12
So I'm gonna show you the one I personally made, which is this wonderful render deployment, debugging reading in the MOD six resources group project resource.

28:24
This is also in open as well.

28:26
So either place you can go to it any time you're having any sort of issue with render deployment.

28:33
This is the place to come to, it's gonna tell you each and everything you need specifically.

28:39
Hey, what we need to put in our E N V dot pi or our migrations.

28:43
We're gonna see that in a second.

28:45
This is for our E N V dot pi down here migration file.

28:49
Again, reminder, we need these imports and we need a conditional after every single table.

28:56
So this is the place to go to on like where that would be recorded.

29:02
Our Olympic I N I does already have that file template thing in for us outstanding.

29:07
Again, big thing to remember is if you decide to eat out your entire migration folder, restart from scratch, you will need to add all this custom code in.

29:18
It's not gonna come back in when you do a flash DB A kit that will give you the default Olympic I N I and the default E N B dot pi.

29:27
Again, we will want to remember that in our E N V dot Pie, there is also some custom code, same imports.

29:35
Again, really, we just need to know what environment we're in.

29:39
So we can decide whether we need to deal with a schema or not.

29:43
Aside from those imports down here at the bottom, there are a couple of custom conditions adding schema in.

29:51
So again, if you regenerate this, the way we've done before, these will not be in here.

29:58
Fortunately, the reading does have the complete E N V dot pi.

30:03
So again, if you regenerated your whole migrations folder, you probably would want to copy this whole E N V dot pi file with these custom commands at the bottom.

30:14
Again, these are the two custom things.

30:15
So if you don't see those in your E N V dot pi, you certainly need to add them just handling schema in production.

30:26
Any questions on that, we will want to come to this often because it's also gonna give us help on our migrations and even our seeds.

30:35
But we're not quite to those yet.

30:37
We just did migration and our E N A.

30:43
Mhm All right.

30:52
The read me is still as useless as it was when we introduced Olympic.

30:57
And again, this is our template for our revisions.

31:01
So our good old migrations folder, couple of things we need to think about.

31:05
Again, every table has got to have this conditional in it that way if we migrate in development, it doesn't matter if we migrate in production, it will apply the schema to every table.

31:21
All right, this is again, just our wonderful database put in that instance folder.

31:28
Oh So this is where there's a lot of code our main in it.

31:39
It's definitely some new things happening here.

31:42
This is not a file.

31:45
We should need to do much in.

31:47
Again, if we're adding in something like sockets, we might need to add something in here.

31:53
A lot of different imports will get to all of those as we go through using them, we are creating a flask gap kind of like we used to.

32:02
But we do need this static folder and this static URL path.

32:08
Again, we are going to be basically putting the react build in our public folder, having it be rendered from there.

32:18
So we just need to tell flask that is happening.

32:21
We have a static folder that's really where our front end is going to exist.

32:25
And it's going to live at basically our index rep we went over off.

32:33
So again, if you were there, this is creating our login manager, basically similar to how we created our migration manager.

32:41
All the other things we've done just again saying, hey, we actually are gonna manage log in here.

32:47
And this log in view is where our site is going to be directed when a user is not authorized.

32:53
So there's actually a route to show that in the API folder and our login user loader, this again is just when a user is being logged in it, queries for that user by its id.

33:07
And then it's gonna save the instance of that user to the current user variable.

33:13
That is again something we can import and use anywhere inside of app just is going to give us that current user super helpful to have.

33:22
This is just again, part of the whole login flash login package process.

33:29
This is a adding our seed commands we saw that how that was done last week, Thursday night, I believe.

33:36
Yeah.

33:37
So again, the exact same setup, we'll see our seed commands, what we've got to work with in a bit.

33:43
We're configuring our object.

33:45
Again, I have, we have a config class here.

33:48
We'll look at that next.

33:49
Hopefully, that should not be new to us at all.

33:52
We then are registering our blueprints.

33:55
We've got users and off routes already set up.

33:58
We'll take a peek at those eventually as well.

34:01
You can go ahead and definitely should add other blueprints to this for sure, setting up our database and again, migrating this is how easy cores is with flask, we just invoke it and pass our app into it all.

34:17
You need to do pretty simple.

34:20
Again, if you're doing something like web sockets, you'll have to worry about the allowed origins.

34:25
That's kind of not done directly here in Coors but somewhat related.

34:33
What's this one?

34:34
Gotcha.

34:34
So this is just we are deploying on render render is not going to allow us to navigate to any unprotected URL S.

34:45
So we cannot go to anything that's going to H B http only.

34:50
We have to be at secure URL S needing an HTTP S.

34:56
So this is a simple replace again, if we want to remember how replace works, only if it ever finds the first subst, will it replace it with the second substrate?

35:08
If it never finds this replace does absolutely nothing.

35:12
So all this is going to do is if there's ever any sort of URL that comes in with HTTP, we're gonna replace that with HTTP S so that render does not have a total fit on this.

35:27
That's what this is doing.

35:30
This is our wonderful after request.

35:32
We've seen this a couple times now.

35:34
This is the magic of how we're doing.

35:36
C surf token.

35:37
Every single time a request is made once the response is being sent, this fires getting, adding the C surf token as a cookie to that response.

35:50
When that response hits our front end, that cookie is saved in our browser.

35:55
We can even just literally go there and see that the only requests are coming from us though, right?

36:01
Yes.

36:01
So the front end, whenever your front end makes a request, your front end is gonna do that.

36:05
Basically when you go to your landing page.

36:09
So again, at that point, your front end should now have your CS serve token.

36:15
Again, remember that's gonna be sent with every request from that front end.

36:19
So it'll always be coming in.

36:21
We just want to remember in any of our forms, we've got to take it, pull it off of the cookie and put it in the form where W T forms is expecting it so that it will check that that's a valid C serve token for us and allow us to pass into our validate on submit functionality.

36:39
So again, most of the stuff we're going through here, nothing we need to really do to change anything.

36:44
Just kind of important to understand what it's doing and why obviously Cesar protection, incredibly important to maintain that even when using react in our front.

36:58
No, it's not the sea surf thing that makes the HTTP.

37:01
That's above it.

37:02
Again, this is a simple replace.

37:04
If we're in production any time there's a header coming in that has HTTP, it's going to again, run the replace.

37:12
So that again, this is to make it so that render does not throw a fit and error out on us.

37:18
If render is given a URL that says http with no S it'll be like, hey, I only can handle secure http URL S sorry.

37:28
I'm not doing that for you.

37:30
So again, this is just gonna replace it with it and then render will be happy.

37:37
This was the API docs I showed you again, really just for fun.

37:41
If you want to use it to build your back end API docs just again, hit this route on your server again, not in the front end, you've got to directly hit the route on the server, but it will return that really cool list of your routes and their dock strings paths and methods.

37:59
Basically, this is an important one.

38:04
This is important in production.

38:07
What happens in production if we don't have this and, and we're not really in production now.

38:14
But if we were in production and did a hard refresh our URL S that display in our front end are our react front end URL S.

38:25
They are not our back end URL S or not necessarily our back end U R S.

38:32
So on render, this was even an issue on hiro doing a hard refresh would actually take the front end URL and try to hit the server with it and that would get, you know, a four oh four.

38:46
Hey, I don't have that URL, your front end.

38:49
URL.

38:50
S really have very little connection to your back end URL.

38:53
S.

38:54
So what this is doing is, hey, if we get one of those requests that basically is not found in the routes here, it's gonna forward it to our public pet.

39:05
This is also important like for our Facon because our Fava is gonna be sitting in that public folder as well.

39:10
So again, if there's a request saying, hey, where's your Fava Con?

39:14
It's going to route those requests to our front end, which is handling those.

39:19
So again, this is something we need for production only it.

39:23
So it can again on a hard refresh, basically not explode our site.

39:30
The last thing we have here is an error handler.

39:32
So again, if it finds absolutely no routes when it comes to our server, it's going to default to going to the index html.

39:42
And that kind of is connected with the top one of, hey, if we're trying to actually ping our server for a URL that's in our front end, we probably want to go back to our index and try from there again.

39:57
That's our main duer in it.

39:59
Any questions on and some of these we've talked about basically in pieces.

40:06
Now we're just throwing it all together into our net for production public is in React App.

40:14
React App is in public is more like it.

40:19
But yes, that's where the React App will get built for us.

40:22
That's actually we're gonna see that ban as part of the deployment when we actually enter commands into render on how to build things.

40:30
We'll see what it's kind of doing with our React App there.

40:33
But remember React is unique in the sense that it is able to build a production version of itself.

40:39
So we're just gonna let it do that for us and then put it in basically a public static folder where requests will get routed to.

40:51
Hm All right.

40:56
Config dot Pie pretty similar.

40:59
There is a replace here as well.

41:02
This is something that render does.

41:08
Rou did it as well when it generates your database URL, it would use Postgres.

41:16
Sequel Alchemy does not like that sequel Alchemy used to allow it.

41:20
Sequel Alchemy got Super picky.

41:22
It wants to see Postgres Q L instead.

41:26
So again, this is a replace just like we saw in the last file.

41:29
It's only going to replace the first item if it gets that item, otherwise it does nothing.

41:36
So again, if it gets a URL with post grass, it will just replace it with Postgres Q L, you'll still be able to connect to your database.

41:45
It's just SQL alchemy will be happy with the URL that's provided and not error got only something we need in production.

41:54
But because of the way replace works, like we don't need a conditional here in development our database URL.

42:04
Where did it go?

42:06
Looks like this.

42:07
There is no post grass in this at all.

42:09
So replace just does nothing at all.

42:15
But otherwise we should know about our database U R I track modifications and echo again.

42:21
Turn them on if you want or don't.

42:22
It's just stuff you will see in your terminal as far as the queries go and we certainly need a secret key for our c serve protection.

42:45
Sorry, something with just like buzzing like crazy.

42:48
It almost sounds like a doctor hook like clock, doesn't it?

42:54
Super fun?

42:57
I'm just gonna set this out.

43:06
Sorry.

43:07
The one that was bothering me hearing like a ticking sound coming from the drawer hoping it's not a bomb out about to explain.

43:14
I think I'll be OK.

43:17
An approaching Mack truck.

43:18
That's a good cool.

43:23
Any questions so far on code we've talked about?

43:27
Oh my goodness.

43:35
So let's see.

43:36
Let's just go bottom up for our last four sub folders.

43:42
We've got our seed folder here.

43:46
Again, seed commands have already been set up for us.

43:49
A seed all.

43:51
And seed undo, just like we saw last week, there is a little something new here this if environment is production.

43:58
So again, in production, we're kind of limited to our terminal commands and what we can run.

44:04
So the way we would want to do this in production is each time we apply our seeds, we'd actually wanna undo them first, basically resetting everything back to normal and then seeding.

44:16
So just like we talked about last week, the order is incredibly important in both of these.

44:24
Remember we, when we're seating, we need to see tables that don't have dependencies on other tables first.

44:33
So we need to seize our users first.

44:35
Let's pretend we were doing PETA gram here.

44:37
We'd want to see our posts second, because the posts depend on a user.

44:42
They have an offer that is a foreign key to our user table.

44:45
So the user table has to come first.

44:47
Then we'd need to see our posts.

44:50
Technically, we can kind of see those as we do posts but certainly likes need a both a post and a user to already exist.

44:59
So again, when we're building things, we've got to be mindful of that.

45:02
But when we undo our data, when we take it apart, we really need to do it in the reverse order.

45:08
If we try to undo our users first, hey, that's gonna make all the tables that are depending on users really, really mad us.

45:17
So again, remember undoing should be the reverse order of how you do.

45:23
This is not gonna matter in development, but post grass in production will very much care about this order and will error out if the order is not correct.

45:34
So again, ultimately, whatever order we do in our undo, we're gonna wanna have all of those happen in our seed only in production though.

45:43
That hopefully makes sense to us.

45:48
We do already have a users seater set up.

45:52
So again, you'd want to take this user sheer probably copy it over, make a post seater and then go with that.

46:05
Yes, exactly.

46:06
So in production, it's automatically gonna unseeded before you seed.

46:10
But in development, you still will have the ability to undo your commands basically separately.

46:16
Again, it's just because in production, we can really, really, we only get to run commands when we build.

46:22
There are two section, there's like a build commands and a run commands.

46:26
And those are really the only places we can choose to enter code.

46:29
So like technically, we could just put in like a seed undo and run and that ultimately would run that.

46:36
But then we're burning through our deployment time to just run a simple command like that.

46:42
So again, one thing we do is we just combine it.

46:46
So every time we are seating, we are unseating for us kind of just like cleaning out that database.

46:51
So that again, I mean, again, if we had, you know, data already in there and we tried to insert more data, we get foreign key errors.

46:59
So we don't wanna do that.

47:01
So we wanna always in production undo everything first and then go ahead and see Katie, what's up?

47:11
I just have a, a quick question.

47:14
So with with Sequel Eye, I remember that we had to make sure that we were doing certain things differently because Postgres and equalized like posts is, is a little bit more strict.

47:26
And I was wondering if alchemy has that much like, like if there are other things besides like the seating and unseating thing that we need to back that really had nothing to do with Sequel Eye and everything to do with.

47:42
We're using a sequel Light file database and development and a post database in production.

47:50
We tell that a little bit why we have to, we learn that, hey, the containers we have in production get destroyed when our site is inactive.

47:58
So we can't just drop a file in there.

48:01
And again, that's what SQL light is.

48:02
We actually have to connect something like a volume with post grass in it.

48:06
And again, Postgres is very strict about constraints.

48:10
Constraints are a big thing.

48:12
So whether we set them those constraints in our model or in our migration, technically, they're in both.

48:19
If we look at here, the email link user name, one of 40 sequel Light does not care.

48:26
Sequel Light will let you make a user name of fif 60 even probably Post Grass.

48:32
On the other hand, is very serious about enforcing every single one of these.

48:36
So if you have link equals 40 and you try to make a user with a user name of 41 characters.

48:43
Post Grass is gonna tell you no, you can't do that.

48:46
You said only 40 so very strict in enforcing these things.

48:50
And that's why again, I'm not gonna lie.

48:53
Deployment is usually not a fun thing.

48:56
Mean for me, I've done it a lot more times than you all.

48:59
I mean, you all are what gonna be doing your second to third deployment.

49:04
It's definitely something that practice helps you get more comfortable with, but it's never gonna be like, oh, this is super fun.

49:12
So most of the time, I'd say at least 50% of the time when we get an error deploying and it's a database error.

49:19
It actually has absolutely nothing to do with render, it has to do with the fact that we've been developing with a slightly different database structure.

49:27
That Sequel Light file.

49:29
Again, it's not enforcing all these things like it should.

49:32
Post grass is totally changing that it's enforcing everything incredibly strictly.

49:37
So definitely our constraints here as well as the order in which we seed and undo our seeds.

49:43
Very important.

49:44
That's something we definitely need to do a little more care with than what we'd been doing previously because again, the sequel Light File is just not enforcing things like Postgres.

49:54
Well, it's a great question but really like these and again, the order in which we do things is the biggest things we have to be concerned about with our seeding in production.

50:08
One other thing I do want to point out is a little bit more in the undo just because this undo is going to work in both production and development.

50:17
Now again, in production, we need a different command.

50:21
Postgres wants to trunk at our table and post grass does actually need the schema name because again, we're in development.

50:28
It also has this restart identity cascade basically doing the exact same thing we're doing here with the delete from users.

50:36
We just want to reset that database back to, you know, no information.

50:41
And also we want to reset the I DS to, you know, start over at one.

50:45
So these are the different commands that will do it depending on our different database we're using.

50:51
So again, we'd need to copy these to any other any of our other files we're making for seating.

50:59
Obviously changing the name of the tables.

51:02
Do want to remind you to be careful of those joint tables like likes table I in my demonstration with past, I didn't have a separate seater for likes.

51:12
Again, we were kind of seating the likes in our posts.

51:16
So definitely if you have joint tables like that, remember you do need to restart them as well somewhere.

51:21
So if they don't have their own separate file, you might want to add commands in like like I did in the post file that also takes care of removing everything from your like spot.

51:32
Again, a lot of times those joint tables are gonna be really closely related to one or both of the tables, they are kind of connecting.

51:39
So we do want to remember to somewhere handle those as well.

51:45
Cool.

51:47
Do you have any other questions on our c?

51:49
Again, there's a little bit of a comment here to kind of tell us exactly what's happening.

51:54
But really, it's just because Post Grass wants a different raw sequel command to do the same thing that we're doing or already did with our delete for sequel one.

52:07
So that is our seeds fold next up.

52:13
We've got our model.

52:16
We do have just a simple dunder in it here again, doing some of our imports.

52:22
Our DB dot pi does have a tiny bit more in it than previously again, first of all, so we do need to be concerned with our environment and our schema.

52:32
So we're grabbing those environmental variables.

52:35
This is a little bit of a helper function.

52:38
Any time we have a foreign key, we actually do need to add this helper function in simply because when we didn't have a schema, we, we didn't care.

52:48
We were just like, hey, look for this table wherever.

52:52
Cool.

52:53
Now we have a schema.

52:54
So we actually have to say, hey, in this schema is where you want to look for the user table.

52:59
Before again, in development, there's no schema.

53:02
So there's only going to be one user's table in production.

53:06
There's a good chance you needed a user's table in your previous projects.

53:09
So there's gonna be more than one user's table.

53:11
The only way to distinguish which is the correct user table to make in that foreign relationship.

53:17
It's adding our schema in.

53:19
So again, it's defined here, we will use it in any of our other files.

53:27
We do have our user model already defined for us already set up with the user mix in from off.

53:33
So super nice.

53:34
We've got our at property password getter and setter.

53:38
And again, we've got that wonderful check, password attached to our user.

53:42
So again, all we need is our user and then we can check the password for that user.

53:46
Super wonderful note, we have a conditional in each one of our models too.

53:53
Again, if we're in production, we've got to add a schema in as well that can be added as a table argument.

54:02
So we are gonna need this in every single class based model.

54:06
There will be actually a different one for our joint tables.

54:10
I do not have all of those here because again, our user does not have a foreign key to anything we're gonna need to build foreign keys.

54:20
But luckily for us that wonderful reading I mentioned in the resources this has again what we need to put in our models.

54:31
So same thing we saw in the user class specifically saying, hey, this is what we need to do foreign keys.

54:39
Here's our helper.

54:40
So here is an example where we have a DB dot foreign key.

54:46
We just need to add that helper function inside the DB dot foreign keys in vocation.

54:53
And then again, whatever we were passing into foreign key, which is just the table and the ID, we need to pass that into the prefix for production prefix for production is gonna do some string manipulation for us.

55:08
Ultimately turning it into the schema name and then the table name and attribute.

55:14
So again, definitely wanna remember to do that on any foreign key you have even your joint table, foreign keys anywhere you're using DB dot foreign key.

55:24
We've got to add this a prefix for production helper in our joint tables.

55:31
Again, don't have one in the starter.

55:33
But here's an example.

55:35
We still need a conditional like that again because it's a DB dot table and not a full on model like this slightly different.

55:46
Again, remember we are saving this to likes so we can do a likes dot schema attribute equals schema.

55:54
Obviously we need to change likes to whatever joint table we're doing, but we do need that condition as well.

56:02
Again, this file super helpful when you are deploying a render.

56:08
Definitely, if you have any sort of issue, this is gonna be the place to come to check to make sure you have all of your connections.

56:17
There's a little bit on the cedars as well.

56:19
I really al already talked about this.

56:22
The importance of, hey, when we undo these, they've got to be the reverse order.

56:26
We can't undo a user table without undoing the tables that are dependent on it.

56:32
First, that was really it for the seeds.

56:36
And then just a quick thing about the truncate versus reset we saw in the bottom of our seed.

56:44
Very helpful resource.

56:51
Yeah.

56:52
Any questions on our models and we already have a bit of a two dictionary method here.

56:58
Then you will want to modify this, write additional ones as the need suits you.

57:10
Mhm Any questions we only got a couple more to go.

57:21
So our form, we have a just a simple in it to help with our importing.

57:27
And then we do have a login and a sign up form for you.

57:32
Again, you will want to have a form for every resource you're creating simply because you'll want to use the validations.

57:40
We do have a couple of custom validators.

57:44
So again, super helpful.

57:46
And if you wanna go ahead and write more these are a great way of again, basically a template for doing them.

57:53
This one is going to check to see if the user exists.

57:57
So basically you do need to insert form form and field form is a placeholder for the form in general.

58:04
And field is the particular field you are validating.

58:08
So again, this one is going to be validating the email field dot data.

58:13
And then we're just going to check to see does that email already exist or not?

58:17
So kind of important thing to put in.

58:20
And again, another one to check to see if the two passwords match.

58:25
Do wanna note that again when you pass in a built in validator, we do need to invoke it.

58:31
You do not invoke the custom ones again, really W T forms is going to handle invoking that in the route when it runs the validator.

58:43
So one thing to definitely note down again, these are run in the route.

58:49
So that's why we actually can do our queries here because this is going to be run in the route only.

58:56
So this is where we would have to define it.

59:00
So we've got that for log in and sign up as well.

59:05
Again, anything that you can grab from W T forms to validate your data do that, let it do the work for you.

59:14
And then again, if you need a custom one, you can go ahead and all righty, we are almost through So we've got off routes and user routes, the user routes are super simple just again, getting all the users or getting a user by ID probably functionality you would want, again, they are login required or off protected, probably important to be logged in before we just throw sensitive user data at you.

59:46
I would think again, like if you need these, go ahead and use them, if you're not gonna use them, totally cool the off routes.

59:55
On the other hand, probably something we will definitely want to use and we actually might want to use this validation errors to error messages.

1:00:04
It is kind of nice.

1:00:05
It's gonna take the error messages that are output from W T forms.

1:00:11
It's gonna make them a lot prettier and then just pretty much let you send them directly to your front end if you need to.

1:00:18
So really a helper function to make the outputted errors less prettier basically a simple list.

1:00:29
So again, something you potentially would want to use any time you're returning some errors.

1:00:35
This homer route here is just going to test to see if your user is authenticated something, your front end is probably gonna want to do a lot.

1:00:43
If the current user is authenticated, it's going to return that current user to dictionary.

1:00:49
So again, it'll give you basically all the details on the current user, whatever you have put in the two diary method that is for the user.

1:00:58
Remember the current user is an instance of our user class.

1:01:02
So any methods that were written on the user class, current user totally has access to.

1:01:11
We have a, a login route here and ultimately very similar to like creating a resource because technically, we still need to send a form.

1:01:20
We're getting a body back.

1:01:22
We do wanna do the thing where we take our C serve token from the cookies and put it where our form is expecting it to be just so we can again pass our validate on submit while also checking to make sure we still have a valid C serve token.

1:01:38
We're then just going to find that user by its email log in the user.

1:01:43
Once we log in that user, the current user instance where again we import that from our flash login.

1:01:50
You can import this anywhere in your application from flash login.

1:01:54
If there is a logged in user, it is gonna hold the instance of that user.

1:01:59
So you don't even need to query for them.

1:02:00
If it's something your current user has done in your route, you can just say, hey, this is my current user.

1:02:05
I want my current user's ID possibly again because you're going to make them the author owner of something sounds about right.

1:02:14
But this a log in when it is used login user that is taking the instance of the user saving it to current user in our app basically like a session So it will be stored persist in the back end until our user is logged out this log out route.

1:02:33
It's going to now log the user out, meaning they will no longer be the current user.

1:02:38
So we would not have access to them in routes anymore because they've been logged out, them being logged out would also mean that they can no longer access anything with an at login required.

1:02:50
Again, that's going to make sure that there is a current user that has been logged in and exists in our back end.

1:02:57
So that's kind of how our login works with our current user to determine if that user is allowed to see the resources that they are trying to navigate to.

1:03:07
We have a sign up route as well, basically similar to log in, but you're actually creating a user.

1:03:13
So that makes sense.

1:03:14
If you're gonna want more details from your user, you're just gonna want to put more of those in your user model and do it here.

1:03:21
Ultimately, again, we add our user, commit them and then log them in just like we would do with login and then return user to dictionary.

1:03:30
It's probably a good idea because now that you're the logged in user, we wanna send you to the front end.

1:03:36
So that react now has you stored in a session and state, then you can use the current user information there as well.

1:03:45
If we get any sort of error.

1:03:46
We're gonna again, use that helper function to make the errors look less terrible and then just send them to our front end if at any point a user tries to navigate to a route that they are not allowed to.

1:04:01
Basically anything that has a login required and they are not logged in for it will route them to this unauthorized and you will get these errors sent to you in our front and that is our user off.

1:04:17
So again, really, the only thing we need to do is figure out how we want to handle our demo user that could be done in multiple ways.

1:04:26
I could see you in your login out having some sort of functionality like, hey, at this point, if the user equals a certain id or equals our demo user, maybe we want to do something different.

1:04:40
This is a good point to point out how important your demo user is and things you might want to think about for your demo user do not attach every single bit of data to your demo user.

1:04:55
First of all, most people, when they access your site will use your demo user, your instructors are going to test sign in and sign up and log in functionality because really like we have to.

1:05:08
But recruiters hiring managers, basically, anyone who looks at your site is probably going to use your demo login.

1:05:15
They're not gonna take the time to make a user, they're busy people at most, they're gonna give your site 30 seconds to a minute of their time looking at it.

1:05:25
They don't want to spend all of that signing up a user.

1:05:27
So they're gonna go right to your demo user.

1:05:30
Now, if you've attached every bit of data to your demo user, let's say you've made a beautiful Instagram phone.

1:05:37
Your, you, your demo user has made all of your posts.

1:05:41
Let's say our good buddy Fred, who I believe is the same name I used yesterday the day before, mostly because we don't have anyone named Fred here.

1:05:50
So you know, not picking on anyone.

1:05:51
It's just Fred.

1:05:53
Fred goes into your site.

1:05:55
Fred's not a nice person.

1:05:57
Fred's like, hey, let me test out that delete functionality.

1:06:00
Oh, I can delete a post.

1:06:02
Yeah, let me just delete all your posts.

1:06:03
That's gonna be fun for me because I'm Fred.

1:06:06
Fred deletes all your posts on your demo user and logs out.

1:06:09
Next person is a hiring manager at the job.

1:06:12
You really want.

1:06:13
They log into your site on that same demo user.

1:06:16
Wow, this site has no data whatsoever.

1:06:19
Not impressed at all.

1:06:21
Yeah, I'm not hiring this person.

1:06:22
See you later, don't attach all your data to your demo user, make other fake users that no one can log in as and attach some of the data to them.

1:06:33
That way no one can be Fred and basically rip apart your site.

1:06:37
So that the next user sees nothing.

1:06:40
Another way to handle.

1:06:41
This is when your demo user logs in.

1:06:44
Maybe we do some database stuff.

1:06:46
Maybe we delete everything the demo user has and then reset a couple things literally right on the route.

1:06:53
That would kind of ensure that every time a demo user logs in, there's some good data attached to that demo.

1:06:59
Use another way to think about it is maybe like a financial clone or Robin Hood.

1:07:04
You log in as the demo user sell all the stocks log out.

1:07:09
Next demo user comes in has no stocks, has no money to buy stocks.

1:07:14
Really allows your user experience for them.

1:07:16
So definitely think about your demo user, what you need to do on it if you're doing any sort of application where two users chat with each other, sounds like you might need more than one demo user.

1:07:28
How am I gonna know if demo user one's message to some random other person that I can't control worked or not?

1:07:37
I can't.

1:07:38
But if I have two demo users, I can log in as both of them and see the messages go from one to another.

1:07:44
Well, now I can actually see that functionality kind of cool.

1:07:48
So definitely think about your user experience and what it will be like as the demo user because that is what most people who you care about checking out your site will do to check out your site.

1:08:02
Could totally abstract this to a separate demo user login route.

1:08:07
I could see that or again, also just in the login, if it's the demo user do some other functions, maybe make a helper function that again, deletes all the data the demo user has and maybe recedes whatever data you would want a starting demo user to have.

1:08:25
I'll get off my soapbox about demo users.

1:08:28
Do we have any questions about those demo users?

1:08:52
All right.

1:08:53
Any questions on our starter code again, we've gone through it all now.

1:09:02
Not like you can't ask questions after the fact again.

1:09:05
Definitely, I feel it's important to be comfortable with all the code we are seeing and getting so we can be comfortable using it and eventually comfortable talking about it.

1:09:18
Ok.

1:09:19
Feel like I've talked for a little while.

1:09:22
Do we want to take another five minute break before we go into deploying?

1:09:26
Usually deploying is honestly not that long a process, but this is a good point for a little bit.

1:09:32
Yep.

1:09:33
Cool, cool.

1:09:33
Let's do it.

1:09:38
Well, I'm gonna go with a seven minute break for now.

1:09:41
It's totally random.

1:09:43
But yeah, whatever turn, turn down seven minutes.

1:09:50
I'll just keep this running here.

1:09:52
I'll pause the recording and well, and let's jump in to deployment.

1:10:07
The one thing we will wanna do is if we do have any sort of git still attached to our starter we brought down, you're gonna wanna remove that.

1:10:19
We don't remember best way I think of doing that is doing L S dash L A look to see if you've got a dot Git and if you do remove it this point, we do and something I almost always forget as I jump into the deployment part is we need a repo.

1:10:40
And so far, I have not made a repo for this, but that is part of the process.

1:10:47
We connect a github repo to our render application and then we get our wonderful automatic redeploying.

1:10:59
So I'm gonna make a new one.

1:11:04
Go crazy.

1:11:05
I'm gonna call it in January.

1:11:11
It can be me as the owner.

1:11:14
Beautiful should be public.

1:11:17
Let's create that Rio.

1:11:21
One thing I do love is again, this is an incredibly helpful set of instructions.

1:11:27
If you forget how to do some of this stuff, get a net, hoping we don't like to get it and get at and get commit.

1:11:37
I'm hoping our 100% drilled into your memory at this point.

1:11:55
I'm not gonna bother to branch.

1:11:57
Certainly, you're gonna wanna set up multiple branches for your project.

1:12:01
I would highly suggest you add definitely have a main and a let's mute that up.

1:12:14
You wanna have a main or a master branch, you probably want to have a staging branch or a development branch.

1:12:20
Again, your main branch, your production branch, you should only be merging stuff into that, that you are very comfortable that you have tested and worked and reviewed and are cool with that being your public site.

1:12:34
So I do suggest not only a main branch but something like a staging of the good idea that way as you're building things.

1:12:41
Hey, I finished this feature.

1:12:42
Let's merge it into staging and only every now and then when staging is looking good, would we merge staging into me?

1:12:52
So let's let me do my remote ad.

1:12:55
Sorry, just a slide aside about and then we can just get push.

1:13:02
If your upstream is not set, it gives you what?

1:13:06
It should be lovely.

1:13:10
We now should have our tode push to our site or github man asked I pop this out.

1:13:22
Yeah, I think it's OK.

1:13:26
I'll stick to this one for now.

1:13:32
Yeah, you go there and I'll probably forget you exist.

1:13:36
So we definitely need that.

1:13:37
Hopefully we've all set up a render account already.

1:13:42
So for our dashboard, let's see, two things we wanna do.

1:13:47
You potentially should not need to do this.

1:13:49
You already have a post grass instance.

1:13:52
I have deleted mine.

1:13:54
But again, just a bit of a reminder.

1:13:56
Hey, yes, this is a database that's gonna be used for all your projects.

1:14:03
So we probably want to name it something like that.

1:14:07
Your region typically.

1:14:09
Oh, there's a Frankfurt one.

1:14:10
Lovely.

1:14:11
I go with Ohio because it's closest to me and go with Oregon.

1:14:14
Biggest thing is remember to pick the same one for your database as your web service.

1:14:20
If you don't pick the same one, they're never going to find each other.

1:14:23
You're definitely gonna get an error on that.

1:14:25
So just make sure they're the same region Post Crest version really should not matter.

1:14:32
At this point.

1:14:32
I typically do it with 14.

1:14:34
I'm gonna try it with 15.

1:14:35
If it breaks, I'm gonna blame this.

1:14:38
And then we just want to create it.

1:14:40
And again, if we remember, ultimately, we're gonna need to come in here and grab our internal database URL.

1:14:47
It does take a few minutes to make that.

1:14:49
So that's why I did this now and we can move on to start creating our web service.

1:14:55
We want to create a web service for our application.

1:15:00
A lot of people over time have made me collaborators on their repos all some of you have.

1:15:05
So if you see your repo up here, you might want to look into your setting.

1:15:11
Oh, definitely.

1:15:12
So your database will expire after 90 days and you actually do have to reset it.

1:15:17
So definitely, if you're seeing it's expired, go ahead and make a brand new one.

1:15:23
So again, you might see some of your stuff here.

1:15:26
Some of these are probably from the last cohort.

1:15:29
If you are a collaborator on a repo, you can deploy it to render if the settings in github were done like that.

1:15:38
I do not particularly want to do that.

1:15:41
But what we can do is come to configure account.

1:15:44
This will actually take us to configure.

1:15:50
Always wants to.

1:15:55
Hm, do I like to pick?

1:16:10
Only selected repos?

1:16:11
This means only the ones you are allowing to be deployed will see there if you do all repositories.

1:16:19
That's probably why you might see your repository on my screen.

1:16:24
What would I call it?

1:16:26
January?

1:16:29
Cool.

1:16:30
I can take the December off on now.

1:16:32
Only this will show on the screen.

1:16:38
No.

1:16:38
So again, if you wanna go ahead and try not doing it again, first of all, if it's expired, like Mikey's did, you've gotta just make a new one.

1:16:48
If it hasn't expired, you can totally leave it in there.

1:16:51
Again, only one person on your team does need to deploy to render.

1:16:56
So again, if you're not the person deploying this group project is not really going to affect your render at all.

1:17:03
If you, on the other hand, are the person who's deploying.

1:17:06
Yes, we can only have one database for free.

1:17:09
We're using schemas so that we can have multiple projects, use that database in the development process and you know, pushing to production, there's a good chance we're gonna mess up that database a couple times.

1:17:22
Basically, maybe we're gonna put a migration in it and then decide nah that migration is not good.

1:17:27
We need to remake our migrations.

1:17:29
We should know that when that happens, the Olympic table is at the minimum still stuck in that database.

1:17:35
And to be honest, we don't have a great way to undo or downgrade that database in production.

1:17:41
So most of the time, if we have a scenario where we need to remove tables, the best fastest way is going to be to delete that and rebuild it.

1:17:53
Now that does delete it from your previous project.

1:17:56
So again, I'm gonna tell you just let that go for a few weeks because even if you're not the one deploying in your group project in little over a week, you're gonna be starting your cap stone.

1:18:09
You're the only one deploy.

1:18:11
So again, the way render works, it would be great if we could downgrade that database undo our seeds be outstanding.

1:18:19
We don't have the ability to just do a simple terminal command to do that.

1:18:23
So the two way, one of two ways is to delete the whole thing.

1:18:26
The other way is to put that command in our build command.

1:18:30
So we would put Flask DB downgrade.

1:18:34
That would be a way to do it.

1:18:36
But now you have to go through the entire build process to do that downgrade.

1:18:41
You're basically gonna waste 10 to 15 minutes of limited build time to undo migrations or tables on a database that for free and faster you could have deleted and remade.

1:18:54
And again, ultimately, you will have to reconnect any other projects that are on it, but I do not recommend you even bother to do that while you're still developing other projects that again could cause you to have to do the same thing again.

1:19:07
Ideally not the ideal way but in free render without the ability to just run a command, like flash D V downgrade, deleting, destroying that database and building a brand new one is going to be the fastest way to fix certain issues.

1:19:21
It's just really the way it is.

1:19:25
Yeah, I know.

1:19:28
Did that help at all?

1:19:29
Claudia?

1:19:30
You certainly can.

1:19:31
I will tell you I have found a couple of students have paid for it because you supposedly get faster bill times did not help them one bit slow as all hell.

1:19:39
So again, totally up to you.

1:19:41
I would not suggest you do it.

1:19:43
You don't really need to.

1:19:45
You're not, it's not worth it.

1:19:48
Yeah, cool.

1:19:52
So again, now that I've got the one I wanted, I can just save, gonna take us back to render and I should see that one there and only that one and look, it's the first one so we can connect to it.

1:20:13
And I feel like we might actually want these side by side.

1:20:18
Now, at least I do.

1:20:22
Cool.

1:20:23
So from our dashboard new pick the web service and connect it again.

1:20:28
Hopefully it should be there.

1:20:30
You might need to do the thing I did where we configure it.

1:20:35
This is always a wild time.

1:20:37
Your name try to generate, deploy.

1:20:43
Do know that if this name is taken, what render tends to do is prefix a couple of digits at the end, maybe some numbers, it's not going to know or do that for us though until we start building.

1:20:57
So when we start building, you'll see right up here what your actual URL is.

1:21:03
If it's not the same as what we name it, we potentially will have to edit some things and redeploy, remember we want to pick the same region our database was on or we'll have a bad time.

1:21:17
I did not make a main branch because I didn't want to, but you probably should make a main branch.

1:21:22
Whatever your production branch is going to be, should be what you put here if you wanna call a branch production just to remind yourself that, hey, this is our production site branch.

1:21:32
We should not mess around with it.

1:21:34
That's totally a thing we could do.

1:21:41
Yeah, I would suggest that like, again, Google will start flagging sites.

1:21:46
It's almost, I gotta admit like as a group cloning a particular site, it's almost feels good.

1:21:54
I think if Google flags your site for being too close to the original, like, right?

1:21:58
That means, hey, you did such a good job that Google can't necessarily tell the difference between your site and Discord Chord.

1:22:06
So while that sounds and feels nice, that error page is pretty scary and we don't necessarily want people to get scared for that.

1:22:14
So, yeah, making your URL something that again is appropriate for your site but not super close to the clone site would be a good idea for sure.

1:22:28
So, again, potentially, I mean, again, most of you are doing some sort of play on the name of your site.

1:22:34
It's not Robin Hood.

1:22:35
It's Bobbin Hood.

1:22:39
I know, I know the group that's doing.

1:22:41
Robin Hood is not calling.

1:22:42
There's that, but again, that's kind of close Batman.

1:22:45
I like that.

1:22:45
Oh, Robin.

1:22:46
Yeah, Batman.

1:22:47
That's kind of cool.

1:22:49
I think you'd be fine with Batman Hood.

1:22:51
Not, yeah, way to give an idea.

1:22:54
Robin Hood.

1:22:55
I've seen people call their site made Marion.

1:22:58
More of a female themed on Robin Hood.

1:23:00
Kind of cool.

1:23:01
Again, lots of cool things.

1:23:03
You can name it.

1:23:03
Don't make it super duper close, but you want it close enough to the original that, you know, potentially it rhymes.

1:23:10
Great, great question.

1:23:14
Let's see.

1:23:15
So we've got our master branch.

1:23:17
That is good run time.

1:23:19
That should be set to Python three.

1:23:21
We're using Python three.

1:23:22
So outstanding build commands.

1:23:26
We're gonna need more than what's here.

1:23:27
But look it even defaults to using the requirement dot text render, knows how to do it.

1:23:35
So here are our build commands.

1:23:37
We really just want to do a very careful copy and paste.

1:23:43
I do want to point out that the build commands here are set up to build the application with the file structure.

1:23:53
We gave you this N PM install an N PM run build with the prefix React app.

1:24:00
That is telling it that hey, we have a folder here called React app.

1:24:05
You need to actually enter that folder.

1:24:08
That's what the prefix is saying.

1:24:10
You need to enter that folder and then run N PM install.

1:24:13
So if you change the name of this folder or you move this folder, you are going to have to in your build commands a account for whatever you did.

1:24:22
Simplest thing is just to not change it.

1:24:24
But I know that some people really do have a very set file structure that they're looking for.

1:24:29
Again, I understand just remember these specific build commands are set up for the specific file structure of our starter.

1:24:40
Again, we're using N PM install and run build to build a react app for us a production grade.

1:24:48
We're installing our requirements dot text.

1:24:51
We are separately installing something called psycho P G two.

1:24:55
Psycho P G two is the library.

1:24:58
We need to have to connect a sequel, Alchemy O R M to a Postgres database.

1:25:05
Again, we're using Postgres in production.

1:25:08
This is the dependency that would call cause absolute havoc for M one users.

1:25:13
Kind of nice that you don't need it locally now.

1:25:16
But again, just that is the dependency that was causing it.

1:25:19
So again, we're installing it separately because we never want to actually install it in our development.

1:25:25
Whereas everything in our requirements dot text.

1:25:27
We're also putting in development and then the upgrade and see it all.

1:25:31
We should know.

1:25:32
Hey, that's to apply any new migrations we would have had and then run our seed all which as we also hopefully remember in production seed all is undoing everything first before it reads sea.

1:25:47
Yeah.

1:25:47
Again, it is a difficult dependency to work with locally.

1:25:52
I'll say that so we can just take our build commands, copy them over to the build command.

1:25:58
We can for most of us leave our start command of G Unicorn app app.

1:26:05
Again, G Unicorn acts as a web server kind of between our requests and our actual server.

1:26:11
That's what I told us had the ability to spin up multiple instances of our flask server.

1:26:16
Should it need it to handle more requests?

1:26:19
So that is what we want for our build command.

1:26:22
Now, if you are using web sockets at all in your project, you are going to want this different build command.

1:26:30
You are using a vent lett to help you out with your sockets.

1:26:33
It's a dependency.

1:26:34
You need to set up this separate worker.

1:26:37
So please, if you're going to use sockets, you want to change this custom start command to G unicorn with a worker and event.

1:26:47
But if you're not using sockets at all, just keep it the default, what it's going to do for you.

1:26:52
That is all, it's a fun one.

1:26:59
It's either supposed to be pounced gun corn or G unicorn.

1:27:03
And either one is I'd say somewhat f oh next up, we gotta go to advanced and add all of our environmental variables and that always takes a few.

1:27:21
It does give us a list greater, which is certainly kind of helpful.

1:27:30
I do love that.

1:27:31
Our secret is E C RT.

1:27:33
We can just generate it.

1:27:35
That is super nice.

1:27:38
Some of these.

1:27:41
So for this one, we definitely wanna set Flask E N V.

1:27:44
Remember this is going to be production.

1:27:47
We don't get to type that a lot, but there are many conditionals that depend on our Flask E N B being set to production.

1:27:58
Still gotta do our Flask app.

1:28:06
We have next ski map.

1:28:07
We do not want to forget.

1:28:08
Our ski map does not have to be flat schema.

1:28:15
It just should be something different than your previous schemas in your previous projects.

1:28:22
This one is a little trickier just because we kind of need to know what our site's URL is going to be.

1:28:30
We're not entirely sure.

1:28:32
But again, it should be the render URL URL.

1:28:38
So basically come on, let me copy it.

1:28:41
Yeah, we obviously want to take out that at the end application name.

1:28:51
That's where we want to put in whatever we named our application.

1:28:56
And while it says you can grab it from the top, it's not going to appear on the top until you've actually added it.

1:29:05
You do you do?

1:29:11
Oh oh, definitely.

1:29:13
Don't want to forget our database URL either if you have any other environmental variables like API key.

1:29:22
This is where we put all of our Aws secret key kind of stuff.

1:29:28
All right.

1:29:28
So we need to open our dashboard in a new tab or window simply because we wanna grab from our post press set up.

1:29:39
We gotta go to here, we want to grab our internal database URL and know Puerto Rico.

1:29:50
We wanna paste that right here.

1:29:55
All right.

1:29:56
And that looks pretty good for our environmental variables.

1:30:00
Wonderful note on.

1:30:01
Yes, again, anything else we need to add in here?

1:30:05
You definitely want auto deployment and about, that's about all we should need.

1:30:10
So let's create our web service.

1:30:18
This kind of little bit looks like a docker container build that we did.

1:30:24
oh feels longer ago than it was Wednesday now.

1:30:32
Just the waiting happens.

1:30:35
If we look, this is where we finally do get to see our URL, we can even copy it.

1:30:40
It looks like it did not add anything for me.

1:30:43
So awesome.

1:30:44
The URL we used should be good.

1:30:51
Yeah.

1:30:51
Do we have any questions on our deployment as far as when you should try deploying?

1:31:02
Almost, I'd say not, not 100% of the time, but in the neighborhood of 95% or more deployment issues are related to your database.

1:31:14
So if today you and your group flush out your database.

1:31:18
It's not a terrible idea to try deploying up.

1:31:26
It's still going.

1:31:26
Yeah, this is the part where it's installing react.

1:31:29
So again, N T M install always takes a while to do all wonderful stuff.

1:31:43
He's doing his stalls.

1:31:50
It shouldn't take too long because again, the starter is not a full flesh on app.

1:31:55
Again, the whole process to deploy is the exact same cool.

1:32:03
Usually this is good when you start seeing sequel Alchemy engine stuff, it means you were see it.

1:32:16
Where is that happy thing?

1:32:18
You usually see maybe render has changed it.

1:32:23
It did tell me my build was successful.

1:32:26
That's always a nice thing.

1:32:28
Typically though there's something different that it says like mhm Cool.

1:32:37
When you see your service starting, that is also outstanding.

1:32:41
When you see things like that, it means that hey, like see as we got a bunch of get requests, our site is actually now up and deployed.

1:32:51
Let's take a peek and look at this.

1:32:54
Here is our deployed version.

1:32:58
It's like demo at a A dot I O and password I think right responses are deployed site on render.

1:33:16
Do we have any questions?

1:33:23
Got you.

1:33:24
Yeah, Ken.

1:33:25
I would say there's a good chance you could try deploying today.

1:33:29
It's just all of the connections for the database and all of those things you need to add in for the scheme of stuff or the other.

1:33:46
Mhm This one.

1:33:47
Yeah.

1:33:49
Again, definitely when you deploy, remember this reading that gives you everything you need to look at.

1:33:57
I will also suggest if any group has deployment issues.

1:34:02
Like definitely when you are ready, go ahead try deploying if you get an error and you have no idea what's going on.

1:34:09
Don't just keep deploying and trying to do it over and over and over again.

1:34:13
That is the time to put a question in the online questions channel.

1:34:18
You definitely wanna give us the output on your build.

1:34:23
So again, come into, I know where to go.

1:34:33
This is probably the wrong one.

1:34:36
Yeah, then we would want all this copied and shared with us.

1:34:43
One other thing if you were not aware of this log section, this is basically like watching your terminal, your flask terminal in but the deployed fast terminal.

1:34:54
So like when this gets pinged, this output is here.

1:34:57
Errors also happen here.

1:35:00
So when you are debugging, do not forget to check out this logs here.

1:35:05
Again, it's the terminal for your server in production.

1:35:09
Definitely could get some helpful output here.

1:35:14
All right.

1:35:15
That is it for our starter walkthrough.

1:35:20
I am going to