const initState = {
    posts: [
        {id: '1', title: 'Dear parent or guardian', body: "You’re receiving this email because you told us that you want to log in to the YouTube Kids app with your Google Account. Yay! In order for you to log in to the YouTube Kids app with your Google Account and enable additional parental controls and other customisation features, we ask that you review the information below and provide your consent, which you can provide in the YouTube Kids app after reading the in-product version of this email."},

        {id: '2', title: 'Information we collect and how we use it', body: "Unless you sign in to the app and create a profile for your child, YouTube Kids operates as a signed-out service. This means that we don't allow your child to sign in (except in certain instances as described in the section called ‘Signing in to YouTube Kids with your child's Google Account’) and you don't need to use your Google Account for the app to work. If you choose to sign in to the app to use your YouTube Premium subscription or enable profiles and access certain parental controls and customisation preferences, we collect and use the additional information described in the section called ‘Signing in to YouTube Kids with your Google Account’ below."},

        {id: '3', title: 'How we use the information we collect', body: "We use the information we collect for internal operational purposes, such as spam and abuse prevention, enforcing our content licence restrictions, determining preferred language and providing and improving the service. We also use this information to offer users personalised content. We associate an identifier that's unique to the app with the videos your child has watched and terms they've searched for to recommend content likely to be of interest to them, subject to the controls described below."}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;