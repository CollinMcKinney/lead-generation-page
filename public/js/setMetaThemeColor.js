function setMetaThemeColor() {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    const rootStyles = getComputedStyle(document.documentElement);
    const themeColor = rootStyles.getPropertyValue('--color-theme');
    metaThemeColor.setAttribute("content", themeColor);
}

window.onload = setMetaThemeColor;