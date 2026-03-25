import { Flavor, Testimonial } from "./types";

export const FLAVORS: Flavor[] = [
  {
    id: 1,
    name: "Golden Mango",
    tag: "The Tropical Hero",
    description: "A velvet swirl of Alphonso nectar and frozen arctic cream.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRHpAIOOb8TNfHvQg6KB0qkJW64PYo7X-gFLalXZAIhNgUmSYr_wAms2eahRVykwq4PF8C-BCgw2NKMQRjN-YJseIlCoQKMUO340FnZ4cYCKbvqLRkWfK8bqJkUyQhJv-Y6SKpPDPnTW0JEc5F-iPCFay7718QP7jrU_oLV1-LTC7LrK-r9geLf1GNW_llmreZ-kFh2nWMfWSkMJIeNjjTV6I6cLQNhR6ieU7WUYqIHMseKCfu4PGKVse44im0aQ6sHHzAS9yc1GI-",
    color: "bg-tertiary/20 text-tertiary-dim",
    shadow: "shadow-[0_25px_40px_rgba(250,226,141,0.5)]",
  },
  {
    id: 2,
    name: "Wild Berry",
    tag: "Summer Sensation",
    description: "Ruby-red dreamscape of wild-harvested strawberries.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeytdSvpZUR86VIy35nWADHTQ33cXtio5QeN8oVr25bW9XiOz6-hzmnn8ArQG0uKHEA6KrZ_f3hd_hxELRCX5FRScpA2-h5kiNNyZ7i03NGPnSCKk379N0ZvTRwpGu6J0TqfzmaKxXW07my-35grA_P8shUCQQTuVPdeIxxO0F3moe-uuuDUOY-uHsZinR4qzR59VBiv4gq1_p1tWuk640gw-TDRiMqlZshug8BW-k7g0dKxv3A8gj6zcNoNk3Xj5IhaUIBTAzMYtk",
    color: "bg-secondary/20 text-secondary-dim",
    shadow: "shadow-[0_25px_40px_rgba(255,192,220,0.5)]",
  },
  {
    id: 3,
    name: "Snow Coconut",
    tag: "Arctic Dream",
    description: "Ivory silk extracted from frozen tropical husks.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMtSuTBJXkH4NjPdYMZaabT4uT9g9EyeRTjQUz1ueG1sz9plDWR4bqSzlf8UV7yayovwEYJq6u3-1uPRXEX6liHKrxxyp0DSFaQT5LcJBXBARjEDJH0J2OXyFYBXmqd06O6DkEl8gsDRtuEj1mlxN-robi5Y5QPeR8dFZ-X8jsIIL3DnG1NLFjFdvWrtB4kNzuFSH4L-dtEGhgpyYnzVo-ZhaTDki3AHbe2XX08IEW9uJusVRWjgHA7ulVgVlYh6KJ-53pNH41GiY2",
    color: "bg-primary/20 text-primary-dim",
    shadow: "shadow-[0_25px_40px_rgba(123,164,253,0.5)]",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The mango shape is so realistic I almost didn't want to eat it. It's like eating a cloud made of fruit!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyh3HbnBxfX8Lm77dO1pTN7CukCPhZZ_b9slTMp1tdEqFKBNz6GZqmmkO1nnhduWFw4Pln5gJlFg9C8s6qVo8xu7Xy6WJxblxCQHoCOhZ6KUqv5Sf22UesvcnUL6D352y9s4aexk34Xw1RntI3l-HnnWP8BJFeo771bCFTip5UY3tsG1xjCLoMX5VyGwA4CXjU7keHkDOOKYONycKJt6puq__ar9JKh9z7v1iakd2V7Pum09aPUsffhcouoSMwDmKwoKZ1Hu8Exq6J",
    rating: 5,
    type: "primary",
  },
  {
    id: 2,
    name: "The Miller Family",
    text: "Pure magic in a bubble. The wild berry flavor is an explosion of summer in the middle of winter.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJqWX8_ZBTpw4Qlu-XLjiMHFoMb-in7Hg5VlvBXGBCBdXxfezXyj6Ily4YQCw5LHL3EeEvWgNyWX3VnUeK_HPos_YyQwaC-HlKFNyUZ0ewBETsgbtkDO0NgK0MM8T5jIdz2EN6eiGumXdqS4uCLf66iXRCYs4voKSZPfX_PT8Jey2upCvg7j9OOw1PUzDFsfjMFvkMjqLfPyqVsKQ9dlM_JwZgu2y9Rg4F0fh0_vOU9PgnEZ37u3i90vKX1m0LP4z3TXFfGpxDtI3z",
    rating: 5,
    type: "secondary",
    },
  {
    id: 3,
    name: "David Chen",
    text: "Literally melting with joy. The coconut flavor is creamy but light. It floats on your tongue.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNRFaTC-LPl2jfSpmY5Ugt-LKEBSpE-nVZPESoOmUikY6zWZiyIVyF_ANZYFgj25zqIkh-QLv5EC9yQNdjLrR9YBUZxFmSLFoHKzPiqr7FmnsfgpZD67t7Ja1ndBEb47IF0Hz81z0PIUSUD90sybxV5__IfNWTOh9BWy4ZCV0v10Z0aQWyt1Y18Sx8fka2XGab2xZggMZrg28iDqzEP9XmY8AxDAQZpPk1EOyoaK2xA5P22HNeKXl798r_Erv3E9x1HJ9Q95DsB8Qb",
    rating: 5,
    type: "tertiary",
  },
];
