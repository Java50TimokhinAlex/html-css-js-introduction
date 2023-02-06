import { createElement } from "./../utils/createElement.js";

const LIST_ELEMENT_ID = "tabs-list";
const CONTENT_ELEMENT_ID = "tab-content";

export class Tabs {
  #tabsListElement;
  #tabContentElement;
  #activeContentElementId;
  #sectionList;

  constructor(sections, activeSectionId) {
    this.#tabsListElement = LIST_ELEMENT_ID;
    this.#tabContentElement = CONTENT_ELEMENT_ID;
    this.#sectionList = sections;
    if (sections.length) {
      const activeSecId = activeSectionId || sections[0].contentElementId;
      this.#activeContentElementId = activeSectionId;

      const tabsListElement = document.getElementById(this.#tabsListElement);
      const tabContentElement = document.getElementById(
        this.#tabContentElement
      );
      if (!this.#sectionList.length) {
        tabsListElement.remove();
        tabContentElement.innerHTML = `<h1>No tabs data, please try again with data</h1>`;
      } else {
        sections.forEach((section) => {
          const el = createElement("button", section.id, section.name);
          el.addEventListener("click", () => this.setActive(section));
          tabsListElement.append(el);
        });
        tabContentElement.innerHTML = `<section id="${
          this.#activeContentElementId
        }"></section>`;

        const activeSection = sections.find(
          (section) => (section.contentElementId = activeSecId)
        );
        this.setActive(activeSection);
      }
    }
  }

  setActive(section) {
    this.#activeContentElementId = section.id;
    const tabContentElement = document.getElementById(this.#tabContentElement);
    tabContentElement.innerHTML = `<section id="${section.contentElementId}"></section>`;

    const el = document.getElementById(section.contentElementId);
    if (section.executor && el) {
      section.executor();
    }
    this.#sectionList.forEach((section) => {
      const btn = document.getElementById(section.id);
      if (section.id === this.#activeContentElementId) {
        btn.classList.add("active-tab");
      } else {
        btn.classList.remove("active-tab");
      }
    });
  }
}
