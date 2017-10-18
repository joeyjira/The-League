class User < ApplicationRecord
    validates :password_digest, :session_token, presence: true
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader: password

    after_initialize :ensure_token

    def self.find_by_credentials(username, password)
        user = User.find_by_username(username)
        return nil unless user && user.is_password?(password)
        user
end
