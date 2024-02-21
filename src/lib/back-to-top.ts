export default function BackToTop(value: string) {
  const result = document.querySelector(value) as HTMLElement;
  if (result) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        if(result.classList.contains('d-none')){
          result.classList.remove('d-none');
          result.classList.add('d-block');
        }
      } else {
        result.classList.remove('d-block');
        result.classList.add('d-none');
      }
    });
    result.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
