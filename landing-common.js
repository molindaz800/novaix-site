(() => {
  function initWhatsappTabs() {
    document.querySelectorAll(".whatsapp-screen").forEach((widget, widgetIndex) => {
      if (widget.dataset.novaixTabsReady === "true") return;
      const tabs = Array.from(widget.querySelectorAll("[data-wa-tab]"));
      const panels = Array.from(widget.querySelectorAll("[data-wa-panel]"));
      if (!tabs.length || !panels.length) return;

      widget.dataset.novaixTabsReady = "true";

      const activate = (tab, focus = false) => {
        const target = tab.dataset.waTab;
        tabs.forEach((item) => {
          const isActive = item === tab;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-selected", String(isActive));
          item.setAttribute("tabindex", isActive ? "0" : "-1");
        });
        panels.forEach((panel) => {
          const isActive = panel.dataset.waPanel === target;
          panel.classList.toggle("is-active", isActive);
          panel.hidden = !isActive;
          panel.setAttribute("aria-hidden", String(!isActive));
        });
        if (focus) tab.focus();
      };

      tabs.forEach((tab, tabIndex) => {
        const target = tab.dataset.waTab;
        const panel = panels.find((item) => item.dataset.waPanel === target);
        const tabId = tab.id || `wa-tab-${widgetIndex}-${target || tabIndex}`;
        const panelId = panel?.id || `wa-panel-${widgetIndex}-${target || tabIndex}`;
        tab.id = tabId;
        tab.setAttribute("aria-controls", panelId);
        tab.setAttribute("tabindex", tab.classList.contains("is-active") ? "0" : "-1");
        if (panel) {
          panel.id = panelId;
          panel.setAttribute("aria-labelledby", tabId);
          panel.setAttribute("aria-hidden", String(!panel.classList.contains("is-active")));
        }
        tab.addEventListener("click", () => activate(tab));
        tab.addEventListener("keydown", (event) => {
          const currentIndex = tabs.indexOf(tab);
          let nextIndex = currentIndex;
          if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
          else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          else if (event.key === "Home") nextIndex = 0;
          else if (event.key === "End") nextIndex = tabs.length - 1;
          else return;
          event.preventDefault();
          activate(tabs[nextIndex], true);
        });
      });

      activate(tabs.find((tab) => tab.classList.contains("is-active")) || tabs[0]);
    });
  }

  window.novaixInitWhatsappTabs = initWhatsappTabs;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhatsappTabs);
  } else {
    initWhatsappTabs();
  }
})();
