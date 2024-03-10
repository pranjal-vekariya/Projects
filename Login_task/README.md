








<!DOCTYPE html>
<html class="ui-light-gray with-top-bar " lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="width=device-width, initial-scale=1" name="viewport">
<title>README.md · main · javascript / simple-pro · GitLab</title>
<script nonce="eZkh+yDtPx/Qn0kM8MxU3g==">
//<![CDATA[
window.gon={};gon.api_version="v4";gon.default_avatar_url="https://gitlab.com/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png";gon.max_file_size=100;gon.asset_host=null;gon.webpack_public_path="/assets/webpack/";gon.relative_url_root="";gon.user_color_scheme="white";gon.markdown_surround_selection=true;gon.markdown_automatic_lists=true;gon.math_rendering_limits_enabled=true;gon.analytics_url="https://collector.prd-278964.gl-product-analytics.com";gon.analytics_id="715db59f-f350-4bfd-aef8-e7a7f0c023f0";gon.sentry_dsn="https://f5573e26de8f4293b285e556c35dfd6e@new-sentry.gitlab.net/4";gon.sentry_environment="gprd";gon.sentry_clientside_traces_sample_rate=0.05;gon.recaptcha_api_server_url="https://www.recaptcha.net/recaptcha/api.js";gon.recaptcha_sitekey="6LfAERQTAAAAAL4GYSiAMGLbcLyUIBSfPrDNJgeC";gon.gitlab_url="https://gitlab.com";gon.revision="a21f6b47dea";gon.feature_category="source_code_management";gon.gitlab_logo="/assets/gitlab_logo-2957169c8ef64c58616a1ac3f4fc626e8a35ce4eb3ed31bb0d873712f2a041a0.png";gon.secure=true;gon.sprite_icons="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg";gon.sprite_file_icons="/assets/file_icons/file_icons-7cd3d6c3b29a6d972895f36472978a4b5adb4b37f9b5d0716a380e82389f7e0e.svg";gon.emoji_sprites_css_path="/assets/emoji_sprites-e1b1ba2d7a86a445dcb1110d1b6e7dd0200ecaa993a445df77a07537dbf8f475.css";gon.gridstack_css_path="/assets/lazy_bundles/gridstack-ff1d6ec7af9347a238856714421a749ddd3be71578bfd624fe2bc7fe23f6d35b.css";gon.test_env=false;gon.disable_animations=null;gon.suggested_label_colors={"#cc338b":"Magenta-pink","#dc143c":"Crimson","#c21e56":"Rose red","#cd5b45":"Dark coral","#ed9121":"Carrot orange","#eee600":"Titanium yellow","#009966":"Green-cyan","#8fbc8f":"Dark sea green","#6699cc":"Blue-gray","#e6e6fa":"Lavender","#9400d3":"Dark violet","#330066":"Deep violet","#36454f":"Charcoal grey","#808080":"Gray"};gon.first_day_of_week=0;gon.time_display_relative=true;gon.time_display_format=0;gon.ee=true;gon.jh=false;gon.dot_com=true;gon.uf_error_prefix="UF";gon.pat_prefix="glpat-";gon.keyboard_shortcuts_enabled=true;gon.diagramsnet_url="https://embed.diagrams.net";gon.version="16.8.0-pre";gon.current_user_id=19441945;gon.current_username="pranjal-vekariya";gon.current_user_fullname="pranjal vekariya";gon.current_user_avatar_url="https://secure.gravatar.com/avatar/084126af70a058395bc7341018ad80f0?s=80\u0026d=identicon";gon.features={"usageDataApi":true,"securityAutoFix":false,"sourceEditorToolbar":false,"vscodeWebIde":true,"keyContactsManagement":true,"removeMonitorMetrics":true,"customEmoji":true,"encodingLogsTree":false,"groupUserSaml":false,"duoChatCallout":true,"blobBlameInfo":true,"highlightJsWorker":true,"explainCodeChat":false};gon.roadmap_epics_limit=1000;gon.ai={"chat":{"total_model_token":4096,"max_response_token":300,"input_content_limit":15184}};gon.subscriptions_url="https://customers.gitlab.com";gon.subscriptions_legacy_sign_in_url="https://customers.gitlab.com/customers/sign_in?legacy=true";gon.payment_form_url="https://customers.gitlab.com/payment_forms/cc_validation";gon.payment_validation_form_id="payment_method_validation";gon.licensed_features={"remoteDevelopment":true};
//]]>
</script>
<script nonce="eZkh+yDtPx/Qn0kM8MxU3g==">
//<![CDATA[
window.uploads_path = "/javascript7533051/simple-pro/uploads";



//]]>
</script>
<script nonce="eZkh+yDtPx/Qn0kM8MxU3g==">
//<![CDATA[
var gl = window.gl || {};
gl.startup_calls = {"/javascript7533051/simple-pro/-/blob/main/README.md?format=json\u0026ref_type=heads\u0026viewer=rich":{}};
gl.startup_graphql_calls = [{"query":"query getBlobInfo(\n  $projectPath: ID!\n  $filePath: String!\n  $ref: String!\n  $refType: RefType\n  $shouldFetchRawText: Boolean!\n) {\n  project(fullPath: $projectPath) {\n    __typename\n    id\n    repository {\n      __typename\n      empty\n      blobs(paths: [$filePath], ref: $ref, refType: $refType) {\n        __typename\n        nodes {\n          __typename\n          id\n          webPath\n          name\n          size\n          rawSize\n          rawTextBlob @include(if: $shouldFetchRawText)\n          fileType\n          language\n          path\n          blamePath\n          editBlobPath\n          gitpodBlobUrl\n          ideEditPath\n          forkAndEditPath\n          ideForkAndEditPath\n          codeNavigationPath\n          projectBlobPathRoot\n          forkAndViewPath\n          environmentFormattedExternalUrl\n          environmentExternalUrlForRouteMap\n          canModifyBlob\n          canCurrentUserPushToBranch\n          archived\n          storedExternally\n          externalStorage\n          externalStorageUrl\n          rawPath\n          replacePath\n          pipelineEditorPath\n          simpleViewer {\n            fileType\n            tooLarge\n            type\n            renderError\n          }\n          richViewer {\n            fileType\n            tooLarge\n            type\n            renderError\n          }\n        }\n      }\n    }\n  }\n}\n","variables":{"projectPath":"javascript7533051/simple-pro","ref":"main","refType":"HEADS","filePath":"README.md","shouldFetchRawText":false}}];

if (gl.startup_calls && window.fetch) {
  Object.keys(gl.startup_calls).forEach(apiCall => {
   gl.startup_calls[apiCall] = {
      fetchCall: fetch(apiCall, {
        // Emulate XHR for Rails AJAX request checks
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        // fetch won’t send cookies in older browsers, unless you set the credentials init option.
        // We set to `same-origin` which is default value in modern browsers.
        // See https://github.com/whatwg/fetch/pull/585 for more information.
        credentials: 'same-origin'
      })
    };
  });
}
if (gl.startup_graphql_calls && window.fetch) {
  const headers = {"X-CSRF-Token":"URp68-vYpDZs6hQV9Id1imja8enhXZnv_W-T8BZs5cWj57g1c0iXV3u6ckR6G91a2ImzhdhUPOH2rjZual5GJA","x-gitlab-feature-category":"source_code_management"};
  const url = `https://gitlab.com/api/graphql`

  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    }
  };

  gl.startup_graphql_calls = gl.startup_graphql_calls.map(call => ({
    ...call,
    fetchCall: fetch(url, {
      ...opts,
      credentials: 'same-origin',
      body: JSON.stringify(call)
    })
  }))
}


//]]>
</script>

<link rel="prefetch" href="/assets/webpack/monaco.7546b41a.chunk.js">

<link rel="stylesheet" href="/assets/application-60368d072aa083a6f8e8dc7b6762a715b38d75028f86177db01a8c5abcdb7ab2.css" media="all" />
<link rel="stylesheet" href="/assets/page_bundles/tree-a5089dc5ce426c5f11ae90f6dc4a5b0be7ec204192f87d6438b0500eaf370d7c.css" media="all" /><link rel="stylesheet" href="/assets/page_bundles/projects-cc9a44858264462e84f8adf7211e8b40d69959d1fac83e72332dbca14f05bb31.css" media="all" />
<link rel="stylesheet" href="/assets/application_utilities-fae333e78367efcb57b4da3ba885d907360ec420a629cd22e8ecd5227a952c2c.css" media="all" />


<link rel="stylesheet" href="/assets/fonts-115c4704cb8c77e2fdf3fd0243eebf164e2e9b54bbab7bf6a4c14868b865ddf8.css" media="all" />
<link rel="stylesheet" href="/assets/highlight/themes/white-1b0806cb2775fab529e835804dfb351a11dd641f48d830a28b4b37882174cc0c.css" media="all" />

<script src="/assets/webpack/runtime.d374fa78.bundle.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/main.4b8479e2.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/tracker.98574c16.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/analytics.3f7bc4c8.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script nonce="eZkh+yDtPx/Qn0kM8MxU3g==">
//<![CDATA[
window.snowplowOptions = {"namespace":"gl","hostname":"snowplow.trx.gitlab.net","cookieDomain":".gitlab.com","appId":"gitlab","formTracking":true,"linkClickTracking":true}

gl = window.gl || {};
gl.snowplowStandardContext = {"schema":"iglu:com.gitlab/gitlab_standard/jsonschema/1-0-9","data":{"environment":"production","source":"gitlab-rails","plan":"free","extra":{},"user_id":19441945,"is_gitlab_team_member":false,"namespace_id":79906242,"project_id":53433259,"context_generated_at":"2024-01-09T14:52:01.056Z"}}
gl.snowplowPseudonymizedPageUrl = "https://gitlab.com/namespace79906242/project53433259/-/blob/:repository_path?ref_type=masked_ref_type";


//]]>
</script>
<link rel="preload" href="/assets/application_utilities-fae333e78367efcb57b4da3ba885d907360ec420a629cd22e8ecd5227a952c2c.css" as="style" type="text/css" nonce="hIS7gm20jnIDTeurfqTYDA==">
<link rel="preload" href="/assets/application-60368d072aa083a6f8e8dc7b6762a715b38d75028f86177db01a8c5abcdb7ab2.css" as="style" type="text/css" nonce="hIS7gm20jnIDTeurfqTYDA==">
<link rel="preload" href="/assets/highlight/themes/white-1b0806cb2775fab529e835804dfb351a11dd641f48d830a28b4b37882174cc0c.css" as="style" type="text/css" nonce="hIS7gm20jnIDTeurfqTYDA==">
<link crossorigin="" href="https://snowplow.trx.gitlab.net" rel="preconnect">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-1e0a5107ea3bbd4be93e8ad2c503467e43166cd37e4293570b490e0812ede98b.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-Italic-38eaf1a569a54ab28c58b92a4a8de3afb96b6ebc250cf372003a7b38151848cc.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-08d2c5e8ff8fd3d2d6ec55bc7713380f8981c35f9d2df14e12b835464d6e8f23.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-Italic-38e58d8df29485a20c550da1d0111e2c2169f6dcbcf894f2cd3afbdd97bcc588.woff2" rel="preload">
<link rel="preload" href="/assets/fonts-115c4704cb8c77e2fdf3fd0243eebf164e2e9b54bbab7bf6a4c14868b865ddf8.css" as="style" type="text/css" nonce="hIS7gm20jnIDTeurfqTYDA==">



<script src="/assets/webpack/sentry.c572f3c5.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>


<script src="/assets/webpack/commons-pages.search.show-super_sidebar.ca7df1db.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/super_sidebar.8a26f87e.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/commons-pages.groups.boards-pages.groups.details-pages.groups.epic_boards-pages.groups.show-pages.gr-7ebda2ba.cae91ccc.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/commons-pages.admin.runners.show-pages.clusters.agents.dashboard-pages.explore.catalog-pages.groups.-bd0c1c0d.9eaa870f.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/commons-pages.groups.security.policies.edit-pages.groups.security.policies.new-pages.projects.blob.s-b77fad0c.0a2a2be1.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/commons-pages.admin.subscriptions.show-pages.groups.security.policies.edit-pages.groups.security.pol-6bfecbfa.51cf7905.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/104.a9e833c0.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.show-pages.projects.tre-c684fcf6.a173be16.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/125.f116f670.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/commons-pages.groups.show-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.a7d80974.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.e3c2c32c.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.tree.show-treeList.8954180d.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<script src="/assets/webpack/pages.projects.blob.show.ed261b2a.chunk.js" defer="defer" nonce="eZkh+yDtPx/Qn0kM8MxU3g=="></script>
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="README.md · main · javascript / simple-pro · GitLab" property="og:title">
<meta content="GitLab.com" property="og:description">
<meta content="https://gitlab.com/assets/twitter_card-570ddb06edf56a2312253c5872489847a0f385112ddbcd71ccfa1570febab5d2.jpg" property="og:image">
<meta content="64" property="og:image:width">
<meta content="64" property="og:image:height">
<meta content="https://gitlab.com/javascript7533051/simple-pro/-/blob/main/README.md?ref_type=heads" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="README.md · main · javascript / simple-pro · GitLab" property="twitter:title">
<meta content="GitLab.com" property="twitter:description">
<meta content="https://gitlab.com/assets/twitter_card-570ddb06edf56a2312253c5872489847a0f385112ddbcd71ccfa1570febab5d2.jpg" property="twitter:image">

<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="z5EmY9kho5HcdoQruIK0ErfV3ckDTKnQdEM0N0dg-MU9bOSlQbGQ8Msm4no2HhzCB4afpTpFDN5_gpGpO1JbJA" />
<meta name="csp-nonce" content="eZkh+yDtPx/Qn0kM8MxU3g==" />
<meta name="action-cable-url" content="/-/cable" />
<link href="/-/manifest.json" rel="manifest">
<link rel="icon" type="image/png" href="/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png" id="favicon" data-original-href="/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/apple-touch-icon-b049d4bc0dd9626f31db825d61880737befc7835982586d015bded10b4435460.png" />
<link href="/search/opensearch.xml" rel="search" title="Search GitLab" type="application/opensearchdescription+xml">




<meta content="GitLab.com" name="description">
<meta content="#ececef" name="theme-color">
</head>

<body class="tab-width-8 gl-browser-chrome gl-platform-windows" data-find-file="/javascript7533051/simple-pro/-/find_file/main?ref_type=heads" data-group="javascript7533051" data-group-full-path="javascript7533051" data-namespace-id="79906242" data-page="projects:blob:show" data-page-type-id="main/README.md" data-project="simple-pro" data-project-id="53433259">

<script nonce="eZkh+yDtPx/Qn0kM8MxU3g==">
//<![CDATA[
gl = window.gl || {};
gl.client = {"isChrome":true,"isWindows":true};


//]]>
</script>



<div class="layout-page page-with-super-sidebar">
<aside class="js-super-sidebar super-sidebar super-sidebar-loading" data-command-palette="{&quot;project_files_url&quot;:&quot;/javascript7533051/simple-pro/-/files/main?format=json&quot;,&quot;project_blob_url&quot;:&quot;/javascript7533051/simple-pro/-/blob/main&quot;}" data-force-desktop-expanded-sidebar="" data-root-path="/" data-sidebar="{&quot;is_logged_in&quot;:true,&quot;context_switcher_links&quot;:[{&quot;title&quot;:&quot;Your work&quot;,&quot;link&quot;:&quot;/&quot;,&quot;icon&quot;:&quot;work&quot;},{&quot;title&quot;:&quot;Explore&quot;,&quot;link&quot;:&quot;/explore&quot;,&quot;icon&quot;:&quot;compass&quot;},{&quot;title&quot;:&quot;Profile&quot;,&quot;link&quot;:&quot;/-/profile&quot;,&quot;icon&quot;:&quot;profile&quot;},{&quot;title&quot;:&quot;Preferences&quot;,&quot;link&quot;:&quot;/-/profile/preferences&quot;,&quot;icon&quot;:&quot;preferences&quot;}],&quot;current_menu_items&quot;:[{&quot;id&quot;:&quot;project_overview&quot;,&quot;title&quot;:&quot;simple-pro&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:53433259,&quot;link&quot;:&quot;/javascript7533051/simple-pro&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;learn_gitlab&quot;,&quot;title&quot;:&quot;Learn GitLab&quot;,&quot;icon&quot;:&quot;bulb&quot;,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/learn_gitlab&quot;,&quot;pill_count&quot;:&quot;17%&quot;,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;manage_menu&quot;,&quot;title&quot;:&quot;Manage&quot;,&quot;icon&quot;:&quot;users&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/activity&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;activity&quot;,&quot;title&quot;:&quot;Activity&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/activity&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project-activity&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;members&quot;,&quot;title&quot;:&quot;Members&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/project_members&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;labels&quot;,&quot;title&quot;:&quot;Labels&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/labels&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;plan_menu&quot;,&quot;title&quot;:&quot;Plan&quot;,&quot;icon&quot;:&quot;planning&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/issues&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;project_issue_list&quot;,&quot;title&quot;:&quot;Issues&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/issues&quot;,&quot;pill_count&quot;:&quot;0&quot;,&quot;link_classes&quot;:&quot;shortcuts-issues has-sub-items&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;boards&quot;,&quot;title&quot;:&quot;Issue boards&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/boards&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-issue-boards&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;milestones&quot;,&quot;title&quot;:&quot;Milestones&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/milestones&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_wiki&quot;,&quot;title&quot;:&quot;Wiki&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/wikis/home&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-wiki&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;code_menu&quot;,&quot;title&quot;:&quot;Code&quot;,&quot;icon&quot;:&quot;code&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/merge_requests&quot;,&quot;is_active&quot;:true,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;project_merge_request_list&quot;,&quot;title&quot;:&quot;Merge requests&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/merge_requests&quot;,&quot;pill_count&quot;:&quot;0&quot;,&quot;link_classes&quot;:&quot;shortcuts-merge_requests&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;files&quot;,&quot;title&quot;:&quot;Repository&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/tree/main&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-tree&quot;,&quot;is_active&quot;:true},{&quot;id&quot;:&quot;branches&quot;,&quot;title&quot;:&quot;Branches&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/branches&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;commits&quot;,&quot;title&quot;:&quot;Commits&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/commits/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-commits&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;tags&quot;,&quot;title&quot;:&quot;Tags&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/tags&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;graphs&quot;,&quot;title&quot;:&quot;Repository graph&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/network/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-network&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;compare&quot;,&quot;title&quot;:&quot;Compare revisions&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/compare?from=main\u0026to=main&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_snippets&quot;,&quot;title&quot;:&quot;Snippets&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/snippets&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-snippets&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;build_menu&quot;,&quot;title&quot;:&quot;Build&quot;,&quot;icon&quot;:&quot;rocket&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/pipelines&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;pipelines&quot;,&quot;title&quot;:&quot;Pipelines&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/pipelines&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-pipelines&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;jobs&quot;,&quot;title&quot;:&quot;Jobs&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/jobs&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;pipelines_editor&quot;,&quot;title&quot;:&quot;Pipeline editor&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/ci/editor?branch_name=main&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;pipeline_schedules&quot;,&quot;title&quot;:&quot;Pipeline schedules&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/pipeline_schedules&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;artifacts&quot;,&quot;title&quot;:&quot;Artifacts&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/artifacts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;secure_menu&quot;,&quot;title&quot;:&quot;Secure&quot;,&quot;icon&quot;:&quot;shield&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/security/discover&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;discover_project_security&quot;,&quot;title&quot;:&quot;Security capabilities&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/security/discover&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;audit_events&quot;,&quot;title&quot;:&quot;Audit events&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/audit_events&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;configuration&quot;,&quot;title&quot;:&quot;Security configuration&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/security/configuration&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;deploy_menu&quot;,&quot;title&quot;:&quot;Deploy&quot;,&quot;icon&quot;:&quot;deployments&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/releases&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;releases&quot;,&quot;title&quot;:&quot;Releases&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/releases&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-deployments-releases&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;feature_flags&quot;,&quot;title&quot;:&quot;Feature flags&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/feature_flags&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-feature-flags&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;packages_registry&quot;,&quot;title&quot;:&quot;Package Registry&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/packages&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-container-registry&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;container_registry&quot;,&quot;title&quot;:&quot;Container Registry&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/container_registry&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;pages&quot;,&quot;title&quot;:&quot;Pages&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/pages&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;operations_menu&quot;,&quot;title&quot;:&quot;Operate&quot;,&quot;icon&quot;:&quot;cloud-pod&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/environments&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;environments&quot;,&quot;title&quot;:&quot;Environments&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/environments&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-environments&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;kubernetes&quot;,&quot;title&quot;:&quot;Kubernetes clusters&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/clusters&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-kubernetes&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;terraform_states&quot;,&quot;title&quot;:&quot;Terraform states&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/terraform&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;infrastructure_registry&quot;,&quot;title&quot;:&quot;Terraform modules&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/infrastructure_registry&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;google_cloud&quot;,&quot;title&quot;:&quot;Google Cloud&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/google_cloud/configuration&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;monitor_menu&quot;,&quot;title&quot;:&quot;Monitor&quot;,&quot;icon&quot;:&quot;monitor&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/error_tracking&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;error_tracking&quot;,&quot;title&quot;:&quot;Error Tracking&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/error_tracking&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;alert_management&quot;,&quot;title&quot;:&quot;Alerts&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/alert_management&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;incidents&quot;,&quot;title&quot;:&quot;Incidents&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/incidents&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;service_desk&quot;,&quot;title&quot;:&quot;Service Desk&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/issues/service_desk&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;analyze_menu&quot;,&quot;title&quot;:&quot;Analyze&quot;,&quot;icon&quot;:&quot;chart&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/value_stream_analytics&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;cycle_analytics&quot;,&quot;title&quot;:&quot;Value stream analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/value_stream_analytics&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project-cycle-analytics&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;contributors&quot;,&quot;title&quot;:&quot;Contributor analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/graphs/main?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;ci_cd_analytics&quot;,&quot;title&quot;:&quot;CI/CD analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/pipelines/charts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;repository_analytics&quot;,&quot;title&quot;:&quot;Repository analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/graphs/main/charts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-repository-charts&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;model_experiments&quot;,&quot;title&quot;:&quot;Model experiments&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/ml/experiments&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;id&quot;:&quot;settings_menu&quot;,&quot;title&quot;:&quot;Settings&quot;,&quot;icon&quot;:&quot;settings&quot;,&quot;avatar&quot;:null,&quot;avatar_shape&quot;:&quot;rect&quot;,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/edit&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;general&quot;,&quot;title&quot;:&quot;General&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/edit&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;integrations&quot;,&quot;title&quot;:&quot;Integrations&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/settings/integrations&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;webhooks&quot;,&quot;title&quot;:&quot;Webhooks&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/hooks&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;access_tokens&quot;,&quot;title&quot;:&quot;Access Tokens&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/settings/access_tokens&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;repository&quot;,&quot;title&quot;:&quot;Repository&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/settings/repository&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;merge_request_settings&quot;,&quot;title&quot;:&quot;Merge requests&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/settings/merge_requests&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;ci_cd&quot;,&quot;title&quot;:&quot;CI/CD&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/settings/ci_cd&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;packages_and_registries&quot;,&quot;title&quot;:&quot;Packages and registries&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/settings/packages_and_registries&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;monitor&quot;,&quot;title&quot;:&quot;Monitor&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/settings/operations&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;analytics&quot;,&quot;title&quot;:&quot;Analytics&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/settings/analytics&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;usage_quotas&quot;,&quot;title&quot;:&quot;Usage Quotas&quot;,&quot;icon&quot;:null,&quot;avatar&quot;:null,&quot;entity_id&quot;:null,&quot;link&quot;:&quot;/javascript7533051/simple-pro/-/usage_quotas&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:true}],&quot;current_context_header&quot;:&quot;Project&quot;,&quot;support_path&quot;:&quot;https://about.gitlab.com/get-help/&quot;,&quot;display_whats_new&quot;:true,&quot;whats_new_most_recent_release_items_count&quot;:4,&quot;whats_new_version_digest&quot;:&quot;9a80cbde0c0fd67d411980e9d12a6f2bbec7cc5f5bb2125ad7afad55edf570e3&quot;,&quot;show_version_check&quot;:false,&quot;gitlab_version&quot;:{&quot;major&quot;:16,&quot;minor&quot;:8,&quot;patch&quot;:0,&quot;suffix_s&quot;:&quot;&quot;},&quot;gitlab_version_check&quot;:null,&quot;search&quot;:{&quot;search_path&quot;:&quot;/search&quot;,&quot;issues_path&quot;:&quot;/dashboard/issues&quot;,&quot;mr_path&quot;:&quot;/dashboard/merge_requests&quot;,&quot;autocomplete_path&quot;:&quot;/search/autocomplete&quot;,&quot;search_context&quot;:{&quot;group&quot;:{&quot;id&quot;:79906242,&quot;name&quot;:&quot;javascript&quot;,&quot;full_name&quot;:&quot;javascript&quot;},&quot;group_metadata&quot;:{&quot;issues_path&quot;:&quot;/groups/javascript7533051/-/issues&quot;,&quot;mr_path&quot;:&quot;/groups/javascript7533051/-/merge_requests&quot;},&quot;project&quot;:{&quot;id&quot;:53433259,&quot;name&quot;:&quot;simple-pro&quot;},&quot;project_metadata&quot;:{&quot;mr_path&quot;:&quot;/javascript7533051/simple-pro/-/merge_requests&quot;,&quot;issues_path&quot;:&quot;/javascript7533051/simple-pro/-/issues&quot;},&quot;code_search&quot;:true,&quot;ref&quot;:&quot;main&quot;,&quot;scope&quot;:null,&quot;for_snippets&quot;:null}},&quot;panel_type&quot;:&quot;project&quot;,&quot;shortcut_links&quot;:[{&quot;title&quot;:&quot;Milestones&quot;,&quot;href&quot;:&quot;/dashboard/milestones&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-milestones&quot;},{&quot;title&quot;:&quot;Snippets&quot;,&quot;href&quot;:&quot;/dashboard/snippets&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-snippets&quot;},{&quot;title&quot;:&quot;Activity&quot;,&quot;href&quot;:&quot;/dashboard/activity&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-activity&quot;},{&quot;title&quot;:&quot;Groups&quot;,&quot;href&quot;:&quot;/dashboard/groups&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-groups&quot;},{&quot;title&quot;:&quot;Projects&quot;,&quot;href&quot;:&quot;/dashboard/projects&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-projects&quot;},{&quot;title&quot;:&quot;Create a new issue&quot;,&quot;href&quot;:&quot;/javascript7533051/simple-pro/-/issues/new&quot;,&quot;css_class&quot;:&quot;shortcuts-new-issue&quot;}],&quot;is_admin&quot;:false,&quot;name&quot;:&quot;pranjal vekariya&quot;,&quot;username&quot;:&quot;pranjal-vekariya&quot;,&quot;admin_url&quot;:&quot;https://gitlab.com/admin&quot;,&quot;admin_mode&quot;:{&quot;admin_mode_feature_enabled&quot;:false,&quot;admin_mode_active&quot;:false,&quot;enter_admin_mode_url&quot;:&quot;/admin/session/new&quot;,&quot;leave_admin_mode_url&quot;:&quot;/admin/session/destroy&quot;,&quot;user_is_admin&quot;:false},&quot;avatar_url&quot;:&quot;https://secure.gravatar.com/avatar/084126af70a058395bc7341018ad80f0?s=80\u0026d=identicon&quot;,&quot;has_link_to_profile&quot;:true,&quot;link_to_profile&quot;:&quot;/pranjal-vekariya&quot;,&quot;logo_url&quot;:null,&quot;status&quot;:{&quot;can_update&quot;:true,&quot;busy&quot;:null,&quot;customized&quot;:null,&quot;availability&quot;:&quot;&quot;,&quot;emoji&quot;:null,&quot;message_html&quot;:null,&quot;message&quot;:null,&quot;clear_after&quot;:null},&quot;settings&quot;:{&quot;has_settings&quot;:true,&quot;profile_path&quot;:&quot;/-/profile&quot;,&quot;profile_preferences_path&quot;:&quot;/-/profile/preferences&quot;},&quot;user_counts&quot;:{&quot;assigned_issues&quot;:0,&quot;assigned_merge_requests&quot;:0,&quot;review_requested_merge_requests&quot;:0,&quot;todos&quot;:0,&quot;last_update&quot;:1704811921146},&quot;can_sign_out&quot;:true,&quot;sign_out_link&quot;:&quot;/users/sign_out&quot;,&quot;issues_dashboard_path&quot;:&quot;/dashboard/issues?assignee_username=pranjal-vekariya&quot;,&quot;todos_dashboard_path&quot;:&quot;/dashboard/todos&quot;,&quot;create_new_menu_groups&quot;:[{&quot;name&quot;:&quot;In this project&quot;,&quot;items&quot;:[{&quot;text&quot;:&quot;New issue&quot;,&quot;href&quot;:&quot;/javascript7533051/simple-pro/-/issues/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;new_issue&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-testid&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;new_issue&quot;}},{&quot;text&quot;:&quot;New merge request&quot;,&quot;href&quot;:&quot;/javascript7533051/simple-pro/-/merge_requests/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;new_mr&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-testid&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;new_mr&quot;}},{&quot;text&quot;:&quot;New snippet&quot;,&quot;href&quot;:&quot;/javascript7533051/simple-pro/-/snippets/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;new_snippet&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-testid&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;new_snippet&quot;}},{&quot;text&quot;:&quot;Invite members&quot;,&quot;href&quot;:null,&quot;component&quot;:&quot;invite_members&quot;,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;invite&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-testid&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;invite&quot;}}]},{&quot;name&quot;:&quot;In GitLab&quot;,&quot;items&quot;:[{&quot;text&quot;:&quot;New project/repository&quot;,&quot;href&quot;:&quot;/projects/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;general_new_project&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-testid&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;general_new_project&quot;}},{&quot;text&quot;:&quot;New group&quot;,&quot;href&quot;:&quot;/groups/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;general_new_group&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-testid&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;general_new_group&quot;}},{&quot;text&quot;:&quot;New snippet&quot;,&quot;href&quot;:&quot;/-/snippets/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;general_new_snippet&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-testid&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;general_new_snippet&quot;}}]}],&quot;merge_request_menu&quot;:[{&quot;name&quot;:&quot;Merge requests&quot;,&quot;items&quot;:[{&quot;text&quot;:&quot;Assigned&quot;,&quot;href&quot;:&quot;/dashboard/merge_requests?assignee_username=pranjal-vekariya&quot;,&quot;count&quot;:0,&quot;userCount&quot;:&quot;assigned_merge_requests&quot;,&quot;extraAttrs&quot;:{&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-label&quot;:&quot;merge_requests_assigned&quot;,&quot;data-track-property&quot;:&quot;nav_core_menu&quot;,&quot;class&quot;:&quot;dashboard-shortcuts-merge_requests&quot;}},{&quot;text&quot;:&quot;Review requests&quot;,&quot;href&quot;:&quot;/dashboard/merge_requests?reviewer_username=pranjal-vekariya&quot;,&quot;count&quot;:0,&quot;userCount&quot;:&quot;review_requested_merge_requests&quot;,&quot;extraAttrs&quot;:{&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-label&quot;:&quot;merge_requests_to_review&quot;,&quot;data-track-property&quot;:&quot;nav_core_menu&quot;,&quot;class&quot;:&quot;dashboard-shortcuts-review_requests&quot;}}]}],&quot;projects_path&quot;:&quot;/dashboard/projects&quot;,&quot;groups_path&quot;:&quot;/dashboard/groups&quot;,&quot;gitlab_com_but_not_canary&quot;:true,&quot;gitlab_com_and_canary&quot;:null,&quot;canary_toggle_com_url&quot;:&quot;https://next.gitlab.com&quot;,&quot;current_context&quot;:{&quot;namespace&quot;:&quot;projects&quot;,&quot;item&quot;:{&quot;id&quot;:53433259,&quot;name&quot;:&quot;simple-pro&quot;,&quot;namespace&quot;:&quot;javascript / simple-pro&quot;,&quot;webUrl&quot;:&quot;/javascript7533051/simple-pro&quot;,&quot;avatarUrl&quot;:null}},&quot;pinned_items&quot;:[&quot;project_issue_list&quot;,&quot;project_merge_request_list&quot;],&quot;update_pins_url&quot;:&quot;/-/users/pins&quot;,&quot;is_impersonating&quot;:false,&quot;stop_impersonation_path&quot;:&quot;/admin/impersonation&quot;,&quot;track_visits_path&quot;:&quot;/-/track_namespace_visits&quot;,&quot;show_tanuki_bot&quot;:false,&quot;trial&quot;:{&quot;has_start_trial&quot;:true,&quot;url&quot;:&quot;/-/trials/new?glm_content=top-right-dropdown\u0026glm_source=gitlab.com&quot;}}"></aside>

<div class="content-wrapper">
<div class="mobile-overlay"></div>

<div class="alert-wrapper gl-force-block-formatting-context">






























<div class="top-bar-fixed container-fluid" data-testid="top-bar">
<div class="top-bar-container gl-display-flex gl-align-items-center gl-gap-2">
<button class="gl-button btn btn-icon btn-md btn-default btn-default-tertiary js-super-sidebar-toggle-expand super-sidebar-toggle gl-ml-n3" aria-controls="super-sidebar" aria-expanded="false" aria-label="Primary navigation sidebar" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="sidebar-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#sidebar"></use></svg>

</button>
<nav aria-label="Breadcrumbs" class="breadcrumbs gl-breadcrumbs" data-testid="breadcrumb-links">
<ul class="breadcrumb gl-breadcrumb-list js-breadcrumbs-list">
<li class="gl-breadcrumb-item"><a class="group-path js-breadcrumb-item-text " href="/javascript7533051">javascript</a></li> <li class="gl-breadcrumb-item"><a href="/javascript7533051/simple-pro"><span class="js-breadcrumb-item-text">simple-pro</span></a></li>

<li class="gl-breadcrumb-item" data-testid="breadcrumb-current-link">
<a href="/javascript7533051/simple-pro/-/blob/main/README.md?ref_type=heads">Repository</a>
</li>
</ul>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"javascript","item":"https://gitlab.com/javascript7533051"},{"@type":"ListItem","position":2,"name":"simple-pro","item":"https://gitlab.com/javascript7533051/simple-pro"},{"@type":"ListItem","position":3,"name":"Repository","item":"https://gitlab.com/javascript7533051/simple-pro/-/blob/main/README.md?ref_type=heads"}]}

</script>
</nav>



</div>
</div>

</div>
<div class="container-fluid container-limited project-highlight-puc">
<main class="content" id="content-body" itemscope itemtype="http://schema.org/SoftwareSourceCode">
<div class="flash-container flash-container-page sticky" data-testid="flash-container">
<div id="js-global-alerts"></div>
</div>


<div class="js-invite-members-modal" data-access-levels="{&quot;Guest&quot;:10,&quot;Reporter&quot;:20,&quot;Developer&quot;:30,&quot;Maintainer&quot;:40,&quot;Owner&quot;:50}" data-default-access-level="10" data-full-path="javascript7533051/simple-pro" data-help-link="https://gitlab.com/help/user/permissions" data-id="53433259" data-is-current-user-admin="false" data-is-project="true" data-is-signup-enabled="true" data-name="simple-pro" data-new-users-url="https://gitlab.com/admin/users/new" data-reload-page-on-submit="false" data-root-id="79906242" data-users-limit-dataset="{&quot;alert_variant&quot;:null,&quot;new_trial_registration_path&quot;:&quot;/-/trials/new?namespace_id=79906242&quot;,&quot;members_path&quot;:&quot;/groups/javascript7533051/-/usage_quotas&quot;,&quot;purchase_path&quot;:&quot;/groups/javascript7533051/-/billings&quot;,&quot;remaining_seats&quot;:3,&quot;free_users_limit&quot;:5}"></div>


<div class="js-signature-container" data-signatures-path="/javascript7533051/simple-pro/-/commits/8f53f5d61846fd1239db535978ddac66f81f9ff5/signatures?limit=1"></div>

<div class="tree-holder gl-pt-4" id="tree-holder">
<div class="nav-block">
<div class="tree-ref-container">
<div class="tree-ref-holder gl-max-w-26">
<div data-project-id="53433259" data-project-root-path="/javascript7533051/simple-pro" data-ref="main" data-ref-type="heads" id="js-tree-ref-switcher"></div>
</div>
<ul class="breadcrumb repo-breadcrumb">
<li class="breadcrumb-item">
<a href="/javascript7533051/simple-pro/-/tree/main?ref_type=heads">simple-pro
</a></li>
<li class="breadcrumb-item">
<a href="/javascript7533051/simple-pro/-/blob/main/README.md?ref_type=heads"><strong>README.md</strong>
</a></li>
</ul>
</div>
<div class="tree-controls gl-display-flex gl-flex-wrap gl-sm-flex-nowrap gl-align-items-baseline gl-gap-3">
<a class="gl-button btn btn-md btn-default shortcuts-find-file" rel="nofollow" href="/javascript7533051/simple-pro/-/find_file/main?ref_type=heads"><span class="gl-button-text">
Find file

</span>

</a>
<a class="gl-button btn btn-md btn-default js-blob-blame-link" href="/javascript7533051/simple-pro/-/blame/main/README.md?ref_type=heads"><span class="gl-button-text">
Blame
</span>

</a>
<a class="gl-button btn btn-md btn-default " href="/javascript7533051/simple-pro/-/commits/main/README.md?ref_type=heads"><span class="gl-button-text">
History
</span>

</a>
<a class="gl-button btn btn-md btn-default js-data-file-blob-permalink-url" href="/javascript7533051/simple-pro/-/blob/8f53f5d61846fd1239db535978ddac66f81f9ff5/README.md"><span class="gl-button-text">
Permalink
</span>

</a>
</div>
</div>

<div class="info-well d-none d-sm-block">
<div class="well-segment">
<ul class="blob-commit-info">
<li class="commit flex-row js-toggle-container" id="commit-8f53f5d6">
<div class="avatar-cell d-none d-sm-block">
<a href="/pranjal-vekariya"><img alt="pranjal vekariya&#39;s avatar" src="https://secure.gravatar.com/avatar/084126af70a058395bc7341018ad80f0?s=80&amp;d=identicon" class="avatar s40 gl-display-none gl-sm-display-inline-block" title="pranjal vekariya"></a>
</div>
<div class="commit-detail flex-list gl-display-flex gl-justify-content-space-between gl-align-items-center gl-flex-grow-1 gl-min-w-0">
<div class="commit-content" data-testid="commit-content">
<a class="commit-row-message item-title js-onboarding-commit-item " href="/javascript7533051/simple-pro/-/commit/8f53f5d61846fd1239db535978ddac66f81f9ff5">Initial commit</a>
<span class="commit-row-message d-inline d-sm-none">
&middot;
8f53f5d6
</span>
<div class="committer">
<a class="commit-author-link js-user-link" data-user-id="19441945" href="/pranjal-vekariya">pranjal vekariya</a> authored <time class="js-timeago" title="Dec 30, 2023 11:47am" datetime="2023-12-30T11:47:01Z" data-toggle="tooltip" data-placement="bottom" data-container="body">Dec 30, 2023</time>
</div>

</div>
<div class="commit-actions flex-row">

<div class="js-commit-pipeline-status" data-endpoint="/javascript7533051/simple-pro/-/commit/8f53f5d61846fd1239db535978ddac66f81f9ff5/pipelines?ref=main"></div>
<div class="commit-sha-group btn-group d-none d-sm-flex">
<div class="label label-monospace monospace">
8f53f5d6
</div>
<button class="gl-button btn btn-icon btn-md btn-default " title="Copy commit SHA" aria-label="Copy commit SHA" aria-live="polite" data-toggle="tooltip" data-placement="bottom" data-container="body" data-category="primary" data-size="medium" data-clipboard-text="8f53f5d61846fd1239db535978ddac66f81f9ff5" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="copy-to-clipboard-icon"><use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#copy-to-clipboard"></use></svg>

</button>

</div>
</div>
</div>
</li>

</ul>
</div>

</div>
<div class="blob-content-holder js-per-page" data-blame-per-page="1000" id="blob-content-holder">
<div data-blob-path="README.md" data-explain-code-available="false" data-new-workspace-path="/-/remote_development/workspaces/new" data-original-branch="main" data-project-path="javascript7533051/simple-pro" data-ref-type="heads" data-resource-id="gid://gitlab/Project/53433259" data-target-branch="main" data-user-id="gid://gitlab/User/19441945" id="js-view-blob-app">
<div class="gl-spinner-container" role="status"><span aria-label="Loading" class="gl-spinner gl-spinner-md gl-spinner-dark gl-vertical-align-text-bottom!"></span></div>
</div>
</div>

</div>

<script nonce="eZkh+yDtPx/Qn0kM8MxU3g==">
//<![CDATA[
  window.gl = window.gl || {};
  window.gl.webIDEPath = '/-/ide/project/javascript7533051/simple-pro/edit/main/-/README.md'


//]]>
</script>
<div data-ambiguous="false" data-ref="main" id="js-ambiguous-ref-modal"></div>

</main>
</div>


</div>
</div>


<script nonce="eZkh+yDtPx/Qn0kM8MxU3g==">
//<![CDATA[
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img.lazy').forEach(img => {
    img.loading = 'lazy';
    let imgUrl = img.dataset.src;
    // Only adding width + height for avatars for now
    if (imgUrl.indexOf('/avatar/') > -1 && imgUrl.indexOf('?') === -1) {
      const targetWidth = img.getAttribute('width') || img.width;
      imgUrl += `?width=${targetWidth}`;
    }
    img.src = imgUrl;
    img.removeAttribute('data-src');
    img.classList.remove('lazy');
    img.classList.add('js-lazy-loaded');
    img.dataset.testid = 'js-lazy-loaded-content';
  });
}

//]]>
</script>
<script nonce="eZkh+yDtPx/Qn0kM8MxU3g==">
//<![CDATA[
gl = window.gl || {};
gl.experiments = {};


//]]>
</script>

</body>
</html>

