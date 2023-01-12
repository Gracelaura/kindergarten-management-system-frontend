function Footer() {
  return (
    <div class="border-t border-solid bg-[#B124A3] mt-4 py-2">
      <div class=" px-4 mx-auto">
        <div class="md:flex md:-mx-4 md:items-center">
          <div class="md:flex-1 md:px-4 text-center md:text-left">
            <p class="text-white">
              &copy; <strong>Copyright 2022</strong>
            </p>
          </div>
          <div class="md:flex-1 md:px-4 text-center md:text-right">
            <a
              href="#"
              class="py-2 px-4 text-white inline-block hover:underline">
              Terms of Service
            </a>
            <a
              href="#"
              class="py-2 px-4 text-white inline-block hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
