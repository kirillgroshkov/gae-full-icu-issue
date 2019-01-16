
# gae-full-icu-issue

This is a minimal repro for this issue: https://stackoverflow.com/questions/54039623/appengine-node-could-not-initialize-icu-check-node-icu-data-or-icu-data-dir

Run locally without full-icu:

    npm start
    
Run locally with full-icu:

    npm run startWithIcu
    
If deployed to GAE without `NODE_ICU_DATA` in `app.yaml` - will show `hasIcu: false`. Deployed there: https://test-icu-dot-ncbackend-test.appspot.com/

If deployed to GAE with `NODE_ICU_DATA` - will fail to start as described in Stackoverflow issue.
