(function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
    new MutationObserver((e) => {
        for (const t of e) if (t.type === "childList") for (const o of t.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function i(e) {
        const t = {};
        return (
            e.integrity && (t.integrity = e.integrity),
            e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
            e.crossorigin === "use-credentials" ? (t.credentials = "include") : e.crossorigin === "anonymous" ? (t.credentials = "omit") : (t.credentials = "same-origin"),
            t
        );
    }
    function s(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = i(e);
        fetch(e.href, t);
    }
})();
localStorage.getItem("theme") === "dark" ? (html.classList.remove("dark"), (change_image.src = "assets/moon-98291da5.svg")) : (html.classList.add("dark"), (change_image.src = "assets/sun-e634a6ed.svg"));
change_btn.addEventListener("click", function () {
    html.classList.toggle("dark"),
        change_image.classList.toggle("dark"),
        change_image.src.includes("assets/moon-98291da5.svg")
            ? ((change_image.src = "assets/sun-e634a6ed.svg"), localStorage.setItem("theme", "dark"))
            : ((change_image.src = "assets/moon-98291da5.svg"), localStorage.setItem("theme", "light"));
});
