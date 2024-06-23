"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core10 = require("@keystone-6/core");

// lists/user.ts
var import_fields = require("@keystone-6/core/fields");
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var User = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields.text)({ validation: { isRequired: true } }),
    email: (0, import_fields.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    password: (0, import_fields.password)({ validation: { isRequired: true } }),
    posts: (0, import_fields.relationship)({ ref: "Post.author", many: true }),
    createdAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// lists/post.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
var Post = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    title: (0, import_fields2.text)({ validation: { isRequired: true } }),
    content: (0, import_fields_document.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    author: (0, import_fields2.relationship)({
      ref: "User.posts",
      ui: {
        displayMode: "cards",
        cardFields: ["name", "email"],
        inlineEdit: { fields: ["name", "email"] },
        linkToItem: true,
        inlineConnect: true
      },
      many: false
    }),
    tags: (0, import_fields2.relationship)({
      ref: "Tag.posts",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["name"],
        inlineEdit: { fields: ["name"] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ["name"] }
      }
    })
  },
  ui: {
    listView: {
      initialColumns: ["title", "author", "tags"]
    }
  }
});

// lists/tag.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var Tag = (0, import_core3.list)({
  access: import_access3.allowAll,
  ui: {
    isHidden: true
  },
  fields: {
    name: (0, import_fields3.text)(),
    posts: (0, import_fields3.relationship)({ ref: "Post.tags", many: true })
  }
});

// lists/image.ts
var import_cloudinary = require("@keystone-6/cloudinary");
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var import_config = require("dotenv/config");
var cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: process.env.CLOUDINARY_API_FOLDER
};
var Image = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    image: (0, import_cloudinary.cloudinaryImage)({
      cloudinary,
      label: "Source"
    }),
    alt: (0, import_fields4.text)({
      label: "Description",
      ui: {
        itemView: { fieldMode: "edit" }
      }
    }),
    category: (0, import_fields4.select)({
      options: [
        { label: "Masonry", value: "masonry" },
        { label: "Articles", value: "articles" },
        { label: "Activists", value: "activists" },
        { label: "Podcasts", value: "podcasts" },
        { label: "Books", value: "books" },
        { label: "Videos", value: "videos" },
        { label: "Timeline", value: "timeline" },
        { label: "General", value: "general" }
      ],
      defaultValue: "background",
      ui: {
        itemView: { fieldMode: "edit" }
      }
    })
  },
  ui: {
    listView: {
      initialColumns: ["image", "alt"]
    }
  }
});

// lists/event.ts
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var Event = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    title: (0, import_fields5.text)({ validation: { isRequired: true }, label: "Event title" }),
    date: (0, import_fields5.calendarDay)({ label: "Date" }),
    pastEvent: (0, import_fields5.checkbox)({ label: "Is this a past event?" }),
    location: (0, import_fields5.text)({ label: "Location", ui: { itemView: { fieldMode: "edit" } } }),
    content: (0, import_fields5.text)({
      label: "Content",
      ui: {
        itemView: { fieldMode: "edit" }
      }
    }),
    timestamp: (0, import_fields5.timestamp)({ defaultValue: { kind: "now" } })
  },
  ui: {
    listView: {
      initialColumns: ["title", "date", "pastEvent"]
    }
  }
});

// lists/activist.ts
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");
var Activist = (0, import_core6.list)({
  access: import_access6.allowAll,
  fields: {
    name: (0, import_fields6.text)({
      label: "Name",
      ui: {
        listView: { fieldMode: "read" }
      }
    }),
    thumbnail: (0, import_fields6.relationship)({
      ref: "Image",
      many: false,
      ui: {
        displayMode: "cards",
        cardFields: ["alt"],
        inlineEdit: { fields: ["alt"] },
        inlineCreate: { fields: ["alt"] },
        linkToItem: true,
        inlineConnect: true
      }
    }),
    description: (0, import_fields6.text)({
      label: "Description",
      ui: {
        itemView: { fieldMode: "edit" }
      }
    })
  },
  ui: {
    listView: {
      initialColumns: ["name", "thumbnail", "description"]
    }
  }
});

// lists/podcast.ts
var import_core7 = require("@keystone-6/core");
var import_access7 = require("@keystone-6/core/access");
var import_fields7 = require("@keystone-6/core/fields");
var Podcast = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    name: (0, import_fields7.text)({
      ui: {
        listView: { fieldMode: "read" }
      }
    }),
    thumbnail: (0, import_fields7.relationship)({
      ref: "Image",
      many: false,
      ui: {
        displayMode: "cards",
        cardFields: ["alt"],
        inlineEdit: { fields: ["alt"] },
        inlineCreate: { fields: ["alt"] },
        linkToItem: true,
        inlineConnect: true
      }
    }),
    description: (0, import_fields7.text)({
      label: "Description",
      ui: {
        itemView: { fieldMode: "edit" }
      }
    })
  },
  ui: {
    listView: {
      initialColumns: ["name", "thumbnail", "description"]
    }
  }
});

// lists/video.ts
var import_core8 = require("@keystone-6/core");
var import_access8 = require("@keystone-6/core/access");
var import_fields8 = require("@keystone-6/core/fields");
var Video = (0, import_core8.list)({
  access: import_access8.allowAll,
  fields: {
    name: (0, import_fields8.text)({ label: "Title", ui: { itemView: { fieldMode: "edit" } } }),
    thumbnail: (0, import_fields8.relationship)({
      ref: "Image",
      many: false,
      ui: {
        displayMode: "cards",
        cardFields: ["alt"],
        inlineEdit: { fields: ["alt"] },
        inlineCreate: { fields: ["alt"] },
        linkToItem: true,
        inlineConnect: true
      }
    }),
    url: (0, import_fields8.text)({ label: "URL", ui: { itemView: { fieldMode: "edit" } } })
  },
  ui: {
    listView: {
      initialColumns: ["name", "thumbnail"]
    }
  }
});

// lists/book.ts
var import_core9 = require("@keystone-6/core");
var import_access9 = require("@keystone-6/core/access");
var import_fields9 = require("@keystone-6/core/fields");
var Book = (0, import_core9.list)({
  access: import_access9.allowAll,
  fields: {
    name: (0, import_fields9.text)({ label: "Title" }),
    author: (0, import_fields9.text)({ isIndexed: "unique" }),
    thumbnail: (0, import_fields9.relationship)({
      ref: "Image",
      many: false,
      ui: {
        displayMode: "cards",
        cardFields: ["alt"],
        inlineEdit: { fields: ["alt"] },
        inlineCreate: { fields: ["alt"] },
        linkToItem: true,
        inlineConnect: true
      }
    }),
    url: (0, import_fields9.text)({ label: "URL" })
  },
  ui: {
    listView: {
      initialColumns: ["name", "author", "thumbnail"]
    }
  }
});

// schema.ts
var lists = {
  User,
  Post,
  Tag,
  Image,
  Event,
  Activist,
  Podcast,
  Video,
  Book
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name createdAt",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = (0, import_core10.config)(
  withAuth({
    server: {
      cors: {
        origin: ["http://localhost:5173"],
        credentials: true
      }
    },
    db: {
      provider: "postgresql",
      url: "postgresql://me:password@localhost:5432/veganmeetup"
    },
    lists,
    session
  })
);
//# sourceMappingURL=config.js.map
