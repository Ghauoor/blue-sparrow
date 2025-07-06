import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            maxLength: 280,
        },
        image: {
            type: String,
            default: "",
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        retweets: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        bookmarks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        isDeleted: {
            type: Boolean,
            default: false,
        },
        isPrivate: {
            type: Boolean,
            default: false,
        },
        isBanned: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        isEdited: {
            type: Boolean,
            default: false,
        },
        editHistory: [
            {
                content: {
                    type: String,
                    required: true,
                },
                editedAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        tags: [
            {
                type: String,
                trim: true,
            },
        ],
        location: {
            type: String,
            default: "",
        },
        language: {
            type: String,
            default: "en",
        },
        viewCount: {
            type: Number,
            default: 0,
        },
        shareCount: {
            type: Number,
            default: 0,
        },
        isPinned: {
            type: Boolean,
            default: false,
        },
        isSensitive: {
            type: Boolean,
            default: false,
        },

    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;