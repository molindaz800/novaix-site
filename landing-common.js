(() => {
  function integrateNovaixPositioning() {
    const isEnglish = document.documentElement.lang?.toLowerCase().startsWith("en");
    const isBusinessHub = /landing-negocios\.html$/i.test(window.location.pathname);
    const homeHref = isEnglish ? "index.html" : "index.html";
    const sectorsHref = isEnglish ? "landing-negocios.html" : "landing-negocios.html";

    if (!isBusinessHub) {
      document.querySelectorAll(".business-index-panel").forEach((panel) => {
        const secondaryClass = panel.querySelector(".btn.secondary") ? "btn secondary" : "btn btn-secondary";
        const kickerClass = panel.querySelector(".eyebrow") ? "eyebrow" : "section-kicker";
        panel.innerHTML = isEnglish
          ? `<div>
              <span class="${kickerClass}">Part of the NOVAIX ecosystem</span>
              <h2 id="business-index-title">More than automation: software and digitization for your business</h2>
              <p>This sector solution can be combined with custom software, tool integration, data dashboards and complete process digitization.</p>
            </div>
            <div class="business-index-actions">
              <a class="${secondaryClass}" href="${homeHref}#servicios"><i class="fa-solid fa-code"></i> Software and digitization</a>
              <a class="${secondaryClass}" href="${sectorsHref}"><i class="fa-solid fa-layer-group"></i> All sectors</a>
            </div>`
          : `<div>
              <span class="${kickerClass}">Parte del ecosistema NOVAIX</span>
              <h2 id="business-index-title">Más que automatización: software y digitalización para tu negocio</h2>
              <p>Esta solución sectorial puede combinarse con software a medida, integración de herramientas, paneles de datos y digitalización completa de procesos.</p>
            </div>
            <div class="business-index-actions">
              <a class="${secondaryClass}" href="${homeHref}#servicios"><i class="fa-solid fa-code"></i> Software y digitalización</a>
              <a class="${secondaryClass}" href="${sectorsHref}"><i class="fa-solid fa-layer-group"></i> Todos los sectores</a>
            </div>`;
      });

      if (!document.getElementById("novaix-positioning-styles")) {
        const styles = document.createElement("style");
        styles.id = "novaix-positioning-styles";
        styles.textContent = `.business-index-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:10px}@media(max-width:760px){.business-index-actions{justify-content:flex-start}.business-index-actions .btn{width:100%;white-space:normal}}`;
        document.head.appendChild(styles);
      }

      document.querySelectorAll("main .cta-band").forEach((cta) => {
        const heading = cta.querySelector("h2");
        const copy = cta.querySelector("p");
        if (heading) heading.textContent = isEnglish
          ? "What should we digitize, connect or automate first?"
          : "¿Qué deberíamos digitalizar, conectar o automatizar primero?";
        if (copy) copy.textContent = isEnglish
          ? "We review your processes, tools and priorities to propose a practical first step, with or without AI."
          : "Revisamos tus procesos, herramientas y prioridades para proponerte un primer paso útil, con o sin IA.";
      });
    }

    document.querySelectorAll("footer .footer-inner p:first-child").forEach((footerCopy) => {
      const year = footerCopy.querySelector("#year")?.outerHTML || '<span id="year"></span>';
      footerCopy.innerHTML = isEnglish
        ? `© ${year} NOVAIX. Custom software, business digitization and applied AI.`
        : `© ${year} NOVAIX. Software a medida, digitalización de negocios e IA aplicada.`;
    });
  }

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
    document.addEventListener("DOMContentLoaded", () => {
      integrateNovaixPositioning();
      initWhatsappTabs();
    });
  } else {
    integrateNovaixPositioning();
    initWhatsappTabs();
  }
})();
