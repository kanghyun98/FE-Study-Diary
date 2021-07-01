export default class Modal {
  constructor({ $target }) {
    this.isVisible = false;
    this.data = null;
    this.modalWrapper = document.createElement("div");
    this.modalWrapper.className = "modal-wrapper";
    this.modalWrapper.classList.add("hidden");

    $target.appendChild(this.modalWrapper);

    this.render();
  }

  toggleModal() {
    this.isVisible = !this.isVisible; //필요한가?

    const modal = document.querySelector(".modal-wrapper");
    modal.classList.toggle("hidden"); //필요한가?
  }

  setState(data) {
    this.data = data;
    this.toggleModal();
    this.render();
  }

  onClose() {
    this.toggleModal();
    this.data = null;
    this.modalWrapper.innerHTML = "";
  }

  render() {
    if (!this.isVisible) return; //필요한가?

    // modal 내부 (컨텐츠 보여주기) div - span - a, ul(-li-a)
    const modalContents = document.createElement("div");
    modalContents.className = "modal-wrapper__contents";

    const h2Subject = document.createElement("h2"); //제목
    h2Subject.innerText = this.data.subject;

    const spanArr = document.createElement("span"); //요약
    spanArr.className = "arr";
    spanArr.innerText = this.data.arr;

    const divMy = document.createElement("div"); //정리 노트
    divMy.className = "myLink";

    const spanMyMent = document.createElement("span");
    spanMyMent.innerText = "정리 노트";

    const aMyLink = document.createElement("a");
    if (this.data.myLink.length > 0) {
      aMyLink.setAttribute("href", this.data.myLink);
      aMyLink.innerText = "My Link is here!";
    } else {
      aMyLink.innerText = "아직 정리하지 않았네요;)";
    }

    const divRef = document.createElement("div"); //참조 링크
    divRef.className = "refLink";

    const spanRefMent = document.createElement("span");
    spanRefMent.innerText = "참조 링크";

    const ulRefLink = document.createElement("ul");
    this.data.refLink.forEach((element) => {
      const liLinks = document.createElement("li");
      const aLinks = document.createElement("a");
      if (element.length < 50) {
        aLinks.innerText = element;
      } else {
        aLinks.innerText = "Ref Link is here!";
      }
      aLinks.setAttribute("href", element);

      liLinks.appendChild(aLinks);
      ulRefLink.appendChild(liLinks);
    });

    // modal 외부 (클릭 시 hidden)
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-wrapper__overlay";

    modalOverlay.addEventListener("click", () => {
      this.onClose();
    });

    modalContents.appendChild(h2Subject);
    modalContents.appendChild(spanArr);

    divMy.appendChild(spanMyMent);
    divMy.appendChild(aMyLink);
    modalContents.appendChild(divMy);

    divRef.appendChild(spanRefMent);
    divRef.appendChild(ulRefLink);
    modalContents.appendChild(divRef);

    this.modalWrapper.appendChild(modalContents);
    this.modalWrapper.appendChild(modalOverlay);
  }
}
